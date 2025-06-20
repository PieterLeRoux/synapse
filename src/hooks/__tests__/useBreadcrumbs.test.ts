import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useBreadcrumbs } from '../useBreadcrumbs'

// Mock useLocation
const mockLocation = (pathname: string) => {
  return {
    pathname,
    search: '',
    hash: '',
    state: null,
    key: 'default',
  }
}

// Mock React Router's useLocation
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useLocation: vi.fn(),
  }
})

import { useLocation } from 'react-router-dom'
import { vi } from 'vitest'

const mockedUseLocation = vi.mocked(useLocation)

describe('useBreadcrumbs', () => {
  it('returns Dashboard for home page', () => {
    mockedUseLocation.mockReturnValue(mockLocation('/'))

    const { result } = renderHook(() => useBreadcrumbs())

    expect(result.current).toEqual([
      {
        label: 'Dashboard',
        href: '/',
        isCurrentPage: true,
      },
    ])
  })

  it('returns Workflows for workflows page (top-level)', () => {
    mockedUseLocation.mockReturnValue(mockLocation('/workflows'))

    const { result } = renderHook(() => useBreadcrumbs())

    expect(result.current).toEqual([
      {
        label: 'Workflows',
        href: '/workflows',
        isCurrentPage: true,
      },
    ])
  })

  it('returns Workflows > SubPage for sub-route', () => {
    mockedUseLocation.mockReturnValue(mockLocation('/workflows/editor'))

    const { result } = renderHook(() => useBreadcrumbs())

    expect(result.current).toEqual([
      {
        label: 'Workflows',
        href: '/workflows',
        isCurrentPage: false,
      },
      {
        label: 'Editor',
        href: '/workflows/editor',
        isCurrentPage: true,
      },
    ])
  })
})
