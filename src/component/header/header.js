import React from "react"

import { Link } from "gatsby"

import headerStyle from "./header.module.scss"

import NavBar from "../Navbar/navbar"

const Header = ({ title, tempBlogLocation }) => {
  return (
    <div>
      <header className={headerStyle.header}>
        <h1>
          <Link to="/" className={headerStyle.title}>
            {title}
          </Link>
        </h1>
        <NavBar tempBlogLocation={tempBlogLocation} />
      </header>
    </div>
  )
}

export default Header
