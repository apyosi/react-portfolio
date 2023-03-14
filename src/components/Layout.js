import { Outlet } from "react-router-dom"
import Header from "./Header"
import NavTabs from "./NavTabs"
import NavTabs2 from "./NavTabs2"
import Footer from "./Footer"

const Layout = () => {
  return (
      <div className="App">
          <Header title="React Portfolio" />
          {/* <NavTabs  /> */}
          <NavTabs2  />
          <Outlet />
          <Footer />
      </div>
  )
}

export default Layout