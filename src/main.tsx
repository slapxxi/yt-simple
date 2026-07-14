import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router'
import App from './App.tsx'
import './index.css'
import { Home, Profile } from '~/components'

const router = createHashRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        Component: Profile,
        path: '/profile',
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
