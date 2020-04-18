import React from "react"
import { Link } from "gatsby"
import headerStyle from "../header/header.module.scss"
import links from "../../constants/link"

const NavBar = ({ tempBlogLocation }) => {
  return (
    <nav>
      <ul className={headerStyle.navList}>
        {!tempBlogLocation ? (
          links.map(({ name, path }) => (
            <>
              <li>
                <Link
                  to={path}
                  className={headerStyle.navItem}
                  activeClassName={headerStyle.activeNavItem}
                >
                  {name}
                </Link>
              </li>
            </>
          ))
        ) : (
          <>
            <li className={headerStyle.blogList}>
              <Link
                to="/blog"
                className={headerStyle.navItemBlog}
                activeClassName={headerStyle.activeNavItem}
              >
                ← Back To The Blog
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default NavBar
