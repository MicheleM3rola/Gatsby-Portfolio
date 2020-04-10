import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import "./footer.scss"

const Footer = () => {
  const author = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer>
      <p>
        Created by {author.site.siteMetadata.author} all copyright reserved 2020
      </p>
    </footer>
  )
}

export default Footer
