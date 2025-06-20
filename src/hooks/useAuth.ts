import { useAuth0 } from '@auth0/auth0-react'

export function useAuth() {
  const {
    isAuthenticated,
    user,
    loginWithRedirect,
    logout: auth0Logout,
    isLoading,
  } = useAuth0()

  const login = () => {
    loginWithRedirect({
      authorizationParams: {
        connection: 'github', // Use GitHub by default
      },
    })
  }

  const logout = () => {
    auth0Logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    })
  }

  return {
    isAuthenticated,
    user,
    login,
    logout,
    isLoading,
  }
}