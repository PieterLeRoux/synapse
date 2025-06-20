import { ReactNode } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'

interface AppGuardProps {
  children: ReactNode
}

export function AppGuard({ children }: AppGuardProps) {
  const { isAuthenticated, isLoading, login } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-6 max-w-md">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Welcome to Synapse</h1>
            <p className="text-muted-foreground">
              Please login to access the application
            </p>
          </div>
          <Button onClick={() => login()} size="lg" className="w-full">
            Login
          </Button>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
