import { createBrowserRouter } from 'react-router-dom'
import { Shell } from '@/components/layout/Shell'
import { Home } from '@/pages/Home'
import { Ontologies } from '@/pages/Ontologies'
import { Workflows } from '@/pages/Workflows'
import { Teams } from '@/pages/Teams'
import { Tools } from '@/pages/Tools'
import { Delegates } from '@/pages/Delegates'
import { History } from '@/pages/History'
import { Settings } from '@/pages/Settings'
import { NotFound } from '@/pages/NotFound'
import { ErrorBoundary } from '@/components/ErrorBoundary'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <Shell />
      </ErrorBoundary>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'ontologies',
        element: <Ontologies />,
      },
      {
        path: 'workflows',
        element: <Workflows />,
      },
      {
        path: 'teams',
        element: <Teams />,
      },
      {
        path: 'tools',
        element: <Tools />,
      },
      {
        path: 'delegates',
        element: <Delegates />,
      },
      {
        path: 'history',
        element: <History />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
