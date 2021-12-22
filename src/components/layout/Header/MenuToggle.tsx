import React from "react"

import {
  toggleButton,
  closeMenu,
} from "@scss/components/buttons/toggle-menu.module.scss"

interface Props {
  toggleMenu: () => void
  isMenuOpen: boolean
}

const MenuToggle = ({ toggleMenu, isMenuOpen }: Props) => {
  return (
    <button
      className={`${toggleButton} ${isMenuOpen && closeMenu}`}
      onClick={toggleMenu}
    >
      <div className={""}></div>
      <div className={""}></div>
      <div className={""}></div>
    </button>
  )
}

export default MenuToggle
