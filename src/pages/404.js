import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../component/SEO"

const NotFound = () => {
  return (
    <div>
      <SEO titlePage="404" />
      <h1>Page not found</h1>
      <p>
        <AniLink fade to="/">
          Head to the HomePage
        </AniLink>
      </p>
    </div>
  )
}

export default NotFound
