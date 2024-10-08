import type { RouteObject } from 'react-router-dom'
import { Routes } from './paths'

export const AppRoutes = [
  {
    path: Routes.home,
    async lazy() {
      const module = await import('@/screens/Landing')
      return { Component: module.default }
    },
  },
  {
    path: Routes.plans,
    async lazy() {
      const module = await import('@/screens/Princing')
      return { Component: module.default }
    },
  },
] as RouteObject[]
