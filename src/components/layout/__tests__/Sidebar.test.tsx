import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { Sidebar } from '../Sidebar'

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('Sidebar', () => {
  const mockOnToggle = vi.fn()

  it('renders the logo with black background section and is clickable', () => {
    renderWithRouter(<Sidebar collapsed={false} onToggle={mockOnToggle} />)
    const logo = screen.getByAltText('Synapse Logo')
    expect(logo).toBeInTheDocument()
    // Find the parent link with bg-black class (logo section)
    const logoSection = logo.closest('a')
    expect(logoSection).toBeInTheDocument()
    expect(logoSection).toHaveClass('bg-black')
    expect(logoSection).toHaveAttribute('href', '/')
  })

  it('renders the app name when expanded', () => {
    renderWithRouter(<Sidebar collapsed={false} onToggle={mockOnToggle} />)
    expect(screen.getByText('Synapse')).toBeInTheDocument()
  })

  it('hides the app name when collapsed', () => {
    renderWithRouter(<Sidebar collapsed={true} onToggle={mockOnToggle} />)
    expect(screen.queryByText('Synapse')).not.toBeInTheDocument()
  })

  it('renders navigation items', () => {
    renderWithRouter(<Sidebar collapsed={false} onToggle={mockOnToggle} />)
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Workflows')).toBeInTheDocument()
    expect(screen.getByText('Teams')).toBeInTheDocument()
  })

  it('renders user avatar in sidebar', () => {
    renderWithRouter(<Sidebar collapsed={false} onToggle={mockOnToggle} />)
    const avatar = screen.getByLabelText('Account profile')
    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveClass('rounded-lg')
  })

  it('shows collapse button with chevron left when expanded', () => {
    renderWithRouter(<Sidebar collapsed={false} onToggle={mockOnToggle} />)
    const collapseButton = screen.getByLabelText('Collapse sidebar')
    expect(collapseButton).toBeInTheDocument()
  })

  it('shows user label when expanded', () => {
    renderWithRouter(<Sidebar collapsed={false} onToggle={mockOnToggle} />)
    expect(screen.getByText('Agent Admin')).toBeInTheDocument()
    expect(screen.getByText('System User')).toBeInTheDocument()
  })

  it('hides user label when collapsed', () => {
    renderWithRouter(<Sidebar collapsed={true} onToggle={mockOnToggle} />)
    expect(screen.queryByText('Agent Admin')).not.toBeInTheDocument()
    expect(screen.queryByText('System User')).not.toBeInTheDocument()
  })
})
