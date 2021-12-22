import * as React from "react"
import Navbar from "./Navbar"
import MM from "@icons/MM-icon.inline.svg"
import { header, brandMark, homeLink } from "@scss/layout/header.module.scss"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className={header}>
      <Link to="/" className={homeLink}>
        <MM className={brandMark} />
      </Link>
      <Navbar />
    </header>
  )
}

export default Header
