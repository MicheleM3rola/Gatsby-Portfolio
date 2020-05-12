import React from "react"
import Header from "../header/header"

import Footer from "../footer/footer"
import FooterBlog from "../footerBlog/footerBlog"

import layoutStyles from "./layout.module.scss"
import "../../styles/index.scss"

const Layout = ({ children, title, tempBlogLocation, locationFooter }) => {
  return (
    <div className={layoutStyles.container}>
      <div>
        <Header title={title} tempBlogLocation={tempBlogLocation} />
      </div>
      <div className={layoutStyles.contentChildren}>{children}</div>
      {!tempBlogLocation && !locationFooter ? <Footer /> : <FooterBlog />}
    </div>
  )
}

export default Layout
