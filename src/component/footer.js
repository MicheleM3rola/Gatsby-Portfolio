import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyle from "./footer.module.scss"
import Bio from "./Bio/bio"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={footerStyle.footer}>
      <p>
        Created by {data.site.siteMetadata.author} all copyright reserved 2020
      </p>
      <Bio />
    </footer>
  )
}

export default Footer
