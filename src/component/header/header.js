import React from "react"

import headerStyle from "./header.module.scss"

import NavBar from "../Navbar/navbar"

const Header = ({ title, tempBlogLocation }) => {
  return (
    <div>
      <header className={headerStyle.header}>
        <h1 className={headerStyle.title}>{title}</h1>
        <NavBar tempBlogLocation={tempBlogLocation} />
      </header>
    </div>
  )
}

export default Header
