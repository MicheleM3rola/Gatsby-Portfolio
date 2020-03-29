import React from "react"
import Header from "./header"
import Footer from "./footer"
import layoutStyles from "./layout.module.scss"
import "../styles/index.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div>
        <Header />
      </div>
      <div className={layoutStyles.contentChildren}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
