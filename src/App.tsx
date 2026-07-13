import { Outlet } from 'react-router'
import { Header, Sidebar } from '~/components'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default App
