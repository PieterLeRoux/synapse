import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { TopNav } from './TopNav'
import { Sidebar } from './Sidebar'

export function Shell() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="lg:flex lg:h-screen">
        <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />

        <div
          className={`flex-1 flex flex-col min-w-0 transition-all duration-200 lg:ml-0 ${
            sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'
          }`}
        >
          <TopNav />

          <main className="flex-1 lg:overflow-y-auto">
            <div className="px-4 py-8 lg:px-8">
              <div className="mx-auto max-w-7xl w-full">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
