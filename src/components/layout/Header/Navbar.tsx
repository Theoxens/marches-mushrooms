import React, { useCallback, useState } from "react"
import NavLink from "./NavLink"
import MenuToggle from "./MenuToggle"

import {
  clickOff,
  menuOpen,
  menuClosed,
  links,
} from "@scss/layout/navbar.module.scss"

interface Props {}

const Navbar = ({}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen)
  }, [isMenuOpen])

  return (
    <nav>
      {isMenuOpen && (
        <div
          className={clickOff}
          onClick={() => {
            setIsMenuOpen(false)
          }}
        ></div>
      )}
      <MenuToggle {...{ isMenuOpen, toggleMenu }} />
      <ul className={`${links} ${isMenuOpen ? menuOpen : menuClosed}`}>
        <NavLink to="/" label="Home" />
        <NavLink to="/about" label="About" />
        <NavLink to="/products" label="Products" />
        <NavLink to="/contact" label="Contact" />
      </ul>
    </nav>
  )
}

export default Navbar
