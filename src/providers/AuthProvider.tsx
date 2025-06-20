import { Auth0Provider } from '@auth0/auth0-react'
import { ReactNode } from 'react'

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID

  if (!domain || !clientId) {
    console.error(
      'Auth0 configuration missing. Please set VITE_AUTH0_DOMAIN and VITE_AUTH0_CLIENT_ID environment variables.'
    )
    return <div>Auth configuration error</div>
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
      useRefreshTokens
    >
      {children}
    </Auth0Provider>
  )
}
