import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router'
import App from './App.tsx'
import './index.css'
import { Home } from '~/components'

const router = createHashRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
