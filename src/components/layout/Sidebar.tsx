import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Home,
  Network,
  Workflow,
  Users,
  Wrench,
  UserCheck,
  History,
  Settings,
  Menu,
  ChevronLeft,
  ChevronRight,
  User,
  Palette,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import logoPng from '@/assets/logo.png'

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Canvas', href: '/canvas', icon: Palette },
  { name: 'Ontologies', href: '/ontologies', icon: Network },
  { name: 'Workflows', href: '/workflows', icon: Workflow },
  { name: 'Teams', href: '/teams', icon: Users },
  { name: 'Tools', href: '/tools', icon: Wrench },
  { name: 'Delegates', href: '/delegates', icon: UserCheck },
  { name: 'History', href: '/history', icon: History },
  { name: 'Settings', href: '/settings', icon: Settings },
]

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const NavItems = ({ showLabels = true }: { showLabels?: boolean }) => (
    <nav className="space-y-2">
      {navigation.map(item => {
        const isActive = location.pathname === item.href
        return (
          <Link
            key={item.name}
            to={item.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              isActive
                ? 'bg-black text-white'
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
              !showLabels && 'justify-center px-4 py-3'
            )}
            onClick={() => setIsOpen(false)}
            title={!showLabels ? item.name : undefined}
          >
            <item.icon
              className={cn(
                'transition-all duration-200',
                showLabels ? 'h-4 w-4' : 'h-5 w-5'
              )}
              strokeWidth={2.5}
            />
            {showLabels && item.name}
          </Link>
        )
      })}
    </nav>
  )

  const LogoSection = ({ showText = true }: { showText?: boolean }) => (
    <Link
      to="/"
      className="bg-black flex items-center gap-3 p-4 hover:bg-black/90 transition-colors cursor-pointer h-16"
      onClick={() => setIsOpen(false)}
    >
      <div
        className={cn(
          'flex items-center justify-center transition-all duration-200',
          showText ? 'w-6' : 'w-full'
        )}
      >
        <img
          src={logoPng}
          alt="Synapse Logo"
          className={cn(
            'transition-all duration-200',
            showText ? 'h-6 w-6' : 'h-8 w-8'
          )}
        />
      </div>
      {showText && (
        <div className="flex-1 min-w-0">
          <h1 className="text-lg font-semibold text-white">Synapse</h1>
        </div>
      )}
    </Link>
  )

  const UserSection = ({ showLabel = true }: { showLabel?: boolean }) => (
    <div
      className={cn(
        'flex items-center gap-3 p-4 border-t',
        !showLabel && 'justify-center'
      )}
    >
      <Avatar className="h-8 w-8 rounded-lg" aria-label="Account profile">
        <AvatarFallback className="rounded-lg bg-slate-200 text-slate-700">
          <User className="h-4 w-4" />
        </AvatarFallback>
      </Avatar>
      {showLabel && (
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">Agent Admin</p>
          <p className="text-xs text-muted-foreground truncate">System User</p>
        </div>
      )}
    </div>
  )

  return (
    <>
      {/* Mobile sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden fixed top-3 left-4 z-50"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex h-full flex-col">
            <LogoSection />
            <div className="flex-1 p-4">
              <NavItems />
            </div>
            <UserSection />
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop sidebar */}
      <aside
        className={cn(
          'hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-30 lg:block lg:bg-background lg:border-r transition-all duration-200 relative',
          collapsed ? 'lg:w-20' : 'lg:w-64'
        )}
      >
        <div className="flex h-full flex-col overflow-hidden">
          <LogoSection showText={!collapsed} />

          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              <NavItems showLabels={!collapsed} />
            </div>
          </div>

          <UserSection showLabel={!collapsed} />
        </div>

        {/* Collapse button positioned on the border */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="absolute -right-3 top-20 h-6 w-6 rounded-full bg-background border shadow-sm hover:bg-accent z-10"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? (
            <ChevronRight className="h-3 w-3" />
          ) : (
            <ChevronLeft className="h-3 w-3" />
          )}
        </Button>
      </aside>
    </>
  )
}
