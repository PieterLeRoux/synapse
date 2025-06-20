import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { TopNav } from '../TopNav'

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('TopNav', () => {
  it('renders header element', () => {
    const { container } = renderWithRouter(<TopNav />)
    const header = container.querySelector('header')
    expect(header).toBeInTheDocument()
  })

  it('has sticky positioning', () => {
    const { container } = renderWithRouter(<TopNav />)
    const header = container.querySelector('header')
    expect(header).toHaveClass('sticky')
  })

  it('has flex-shrink-0 for proper layout', () => {
    const { container } = renderWithRouter(<TopNav />)
    const header = container.querySelector('header')
    expect(header).toHaveClass('flex-shrink-0')
  })

  it('renders breadcrumbs', () => {
    renderWithRouter(<TopNav />)
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })
})
