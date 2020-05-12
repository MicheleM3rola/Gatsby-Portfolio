import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
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
                <AniLink
                  fade
                  to={path}
                  className={headerStyle.navItem}
                  activeClassName={headerStyle.activeNavItem}
                >
                  {name}
                </AniLink>
              </li>
            </>
          ))
        ) : (
          <>
            <li className={headerStyle.blogList}>
              <AniLink
                fade
                to="/blog"
                className={headerStyle.navItemBlog}
                activeClassName={headerStyle.activeNavItem}
              >
                ← Back To The Blog
              </AniLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default NavBar
