import Header from './ui/header.tsx'
import { Outlet } from 'react-router-dom'

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
)

export default Layout
