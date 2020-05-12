import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Form from "../Form/form"
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
      <div className="cont-form">
        <Form />
        <h1>Let's Work Together</h1>
      </div>
      <p>
        Created by {author.site.siteMetadata.author} all copyright reserved 2020
      </p>
    </footer>
  )
}

export default Footer
