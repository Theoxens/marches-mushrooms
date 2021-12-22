import { Link } from "gatsby"
import React from "react"

import { navLink } from "@scss/components/links/nav-link.module.scss"

interface Props {
  to: string
  label: string
}

const NavLink = ({ to, label }: Props) => {
  return (
    <li className={navLink}>
      <Link to={to}>{label}</Link>
    </li>
  )
}

export default NavLink
