import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { Sidebar } from '../Sidebar'

// Mock useAuth
const mockUseAuth = vi.fn()
vi.mock('@/hooks/useAuth', () => ({
  useAuth: () => mockUseAuth(),
}))

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('Sidebar', () => {
  const mockOnToggle = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    // Default authenticated state for most tests
    mockUseAuth.mockReturnValue({
      isAuthenticated: true,
      user: { name: 'Test User', email: 'test@example.com' },
      login: vi.fn(),
      logout: vi.fn(),
      isLoading: false,
    })
  })

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

  it('renders user avatar when authenticated', () => {
    renderWithRouter(<Sidebar collapsed={false} onToggle={mockOnToggle} />)
    expect(screen.getByText('Test User')).toBeInTheDocument()
    expect(screen.getByText('test@example.com')).toBeInTheDocument()
  })

  it('shows login button when not authenticated', () => {
    mockUseAuth.mockReturnValue({
      isAuthenticated: false,
      user: null,
      login: vi.fn(),
      logout: vi.fn(),
      isLoading: false,
    })
    renderWithRouter(<Sidebar collapsed={false} onToggle={mockOnToggle} />)
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('shows collapse button with chevron left when expanded', () => {
    renderWithRouter(<Sidebar collapsed={false} onToggle={mockOnToggle} />)
    const collapseButton = screen.getByLabelText('Collapse sidebar')
    expect(collapseButton).toBeInTheDocument()
  })

  it('shows user info when expanded and authenticated', () => {
    renderWithRouter(<Sidebar collapsed={false} onToggle={mockOnToggle} />)
    expect(screen.getByText('Test User')).toBeInTheDocument()
    expect(screen.getByText('test@example.com')).toBeInTheDocument()
  })

  it('hides user info when collapsed', () => {
    renderWithRouter(<Sidebar collapsed={true} onToggle={mockOnToggle} />)
    // User info should still be present but in a collapsed form (just avatar)
    expect(screen.queryByText('Test User')).not.toBeInTheDocument()
    expect(screen.queryByText('test@example.com')).not.toBeInTheDocument()
  })

  it('shows loading state', () => {
    mockUseAuth.mockReturnValue({
      isAuthenticated: false,
      user: null,
      login: vi.fn(),
      logout: vi.fn(),
      isLoading: true,
    })
    renderWithRouter(<Sidebar collapsed={false} onToggle={mockOnToggle} />)
    // Should show loading skeleton
    expect(screen.queryByText('Test User')).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /login/i })
    ).not.toBeInTheDocument()
  })
})
