import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Head from "../component/head"
import Layout from "../component/layout/layout"

const NotFound = () => {
  return (
    <Layout>
      <Head titlePage="404" />
      <h1>Page not found</h1>
      <p>
        <AniLink fade to="/">
          Head to the HomePage
        </AniLink>
      </p>
    </Layout>
  )
}

export default NotFound
