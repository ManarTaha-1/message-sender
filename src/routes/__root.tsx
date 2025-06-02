import { createRootRoute, Outlet } from '@tanstack/react-router'
import SideBar from '../components/Sidebar'

export const Route = createRootRoute({
  component: () => (
    <>
      <div>
        <SideBar/>
        <Outlet />
      </div>
    </>
  ),
})
