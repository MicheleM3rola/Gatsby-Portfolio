import React from "react"
import Header from "../header/header"

import Footer from "../footer/footer"

import layoutStyles from "./layout.module.scss"
import "../../styles/index.scss"

const Layout = ({ children, title, tempBlogLocation }) => {
  return (
    <div className={layoutStyles.container}>
      <div>
        <Header title={title} tempBlogLocation={tempBlogLocation} />
      </div>
      <div className={layoutStyles.contentChildren}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
