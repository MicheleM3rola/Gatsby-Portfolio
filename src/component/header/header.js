import React from "react"

import { Link } from "gatsby"

import headerStyle from "./header.module.scss"

const Header = ({ title, tempBlogLocation }) => {
  return (
    <div>
      <header className={headerStyle.header}>
        <h1>
          <Link to="/" className={headerStyle.title}>
            {title}
          </Link>
        </h1>
        <nav>
          <ul className={headerStyle.navList}>
            {!tempBlogLocation ? (
              <>
                <li>
                  <Link
                    to="/"
                    className={headerStyle.navItem}
                    activeClassName={headerStyle.activeNavItem}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={headerStyle.navItem}
                    activeClassName={headerStyle.activeNavItem}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className={headerStyle.navItem}
                    activeClassName={headerStyle.activeNavItem}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className={headerStyle.navItem}
                    activeClassName={headerStyle.activeNavItem}
                  >
                    Blog
                  </Link>
                </li>{" "}
              </>
            ) : (
              <>
                <li className={headerStyle.blogList}>
                  <Link
                    to="/blog"
                    className={headerStyle.navItemBlog}
                    activeClassName={headerStyle.activeNavItem}
                  >
                    {tempBlogLocation ? " ← Back To The Blog" : "Home"}
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
