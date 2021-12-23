import { Link } from "gatsby"
import React from "react"
import { globalHistory as history } from "@reach/router"

import { navLink, indicator } from "@scss/components/links/nav-link.module.scss"

interface Props {
  to: string
  label: string
}

const NavLink = ({ to, label }: Props) => {
  const { pathname } = history.location

  const isActive = to === "/" ? to === pathname : pathname.startsWith(to)

  return (
    <li className={navLink}>
      <Link to={to}>{label}</Link>
      {isActive && <div className={indicator} />}
    </li>
  )
}

export default NavLink
