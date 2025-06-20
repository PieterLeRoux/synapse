import { describe, it, expect, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useAuth } from '../useAuth'

// Mock Auth0
const mockUseAuth0 = vi.fn()
vi.mock('@auth0/auth0-react', () => ({
  useAuth0: () => mockUseAuth0(),
}))

describe('useAuth', () => {
  it('returns auth state and methods', () => {
    mockUseAuth0.mockReturnValue({
      isAuthenticated: false,
      user: null,
      loginWithRedirect: vi.fn(),
      logout: vi.fn(),
      isLoading: false,
    })

    const { result } = renderHook(() => useAuth())

    expect(result.current).toHaveProperty('isAuthenticated', false)
    expect(result.current).toHaveProperty('user', null)
    expect(result.current).toHaveProperty('login')
    expect(result.current).toHaveProperty('logout')
    expect(result.current).toHaveProperty('isLoading', false)
  })

  it('calls loginWithRedirect with GitHub connection when login is called', () => {
    const mockLogin = vi.fn()
    mockUseAuth0.mockReturnValue({
      isAuthenticated: false,
      user: null,
      loginWithRedirect: mockLogin,
      logout: vi.fn(),
      isLoading: false,
    })

    const { result } = renderHook(() => useAuth())
    result.current.login()

    expect(mockLogin).toHaveBeenCalledWith({
      authorizationParams: {
        connection: 'github',
      },
    })
  })

  it('calls logout with returnTo parameter when logout is called', () => {
    const mockLogout = vi.fn()
    mockUseAuth0.mockReturnValue({
      isAuthenticated: true,
      user: { name: 'Test User' },
      loginWithRedirect: vi.fn(),
      logout: mockLogout,
      isLoading: false,
    })

    const { result } = renderHook(() => useAuth())
    result.current.logout()

    expect(mockLogout).toHaveBeenCalledWith({
      logoutParams: {
        returnTo: window.location.origin,
      },
    })
  })
})
