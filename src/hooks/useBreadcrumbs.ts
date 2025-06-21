import { useLocation } from 'react-router-dom'

interface BreadcrumbItem {
  label: string
  href: string
  isCurrentPage?: boolean
}

const routeLabels: Record<string, string> = {
  '/': 'Dashboard',
  '/ontologies': 'Ontologies',
  '/workflows': 'Workflows',
  '/teams': 'Teams',
  '/tools': 'Tools',
  '/delegates': 'Delegates',
  '/history': 'History',
  '/settings': 'Settings',
}

export function useBreadcrumbs(): BreadcrumbItem[] {
  const location = useLocation()
  const pathSegments = location.pathname.split('/').filter(Boolean)

  const breadcrumbs: BreadcrumbItem[] = []

  // For top-level routes, just show the current page
  if (location.pathname === '/' || pathSegments.length === 1) {
    const currentRoute = location.pathname === '/' ? '/' : `/${pathSegments[0]}`
    breadcrumbs.push({
      label: routeLabels[currentRoute] || 'Page',
      href: currentRoute,
      isCurrentPage: true,
    })
    return breadcrumbs
  }

  // For sub-routes, show the hierarchy
  let currentPath = ''
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const isLast = index === pathSegments.length - 1

    breadcrumbs.push({
      label:
        routeLabels[currentPath] ||
        segment.charAt(0).toUpperCase() + segment.slice(1),
      href: currentPath,
      isCurrentPage: isLast,
    })

    // Add separator logic will be handled by the component
  })

  return breadcrumbs
}
