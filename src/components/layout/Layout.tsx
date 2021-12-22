import * as React from "react"
import Header from "./Header"
import "@scss/index.scss"
import Footer from "./Footer"

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
