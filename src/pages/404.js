import React from "react"
import { Link } from "gatsby"
import Head from "../component/head"
import Layout from "../component/layout/layout"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Head to the HomePage</Link>
      </p>
    </Layout>
  )
}

export default NotFound
