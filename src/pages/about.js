import React from "react"
import { Link } from "gatsby"
import Layout from "../component/layout"
import Head from "../component/head"

const AboutPage = () => (
  <Layout>
    <Head title="About" />
    <h1>This is my about Page</h1>
    <p>
      I am trying to create a blog where I can share my journey to webdelopment
      check my
      <Link to="/contact">Contact Page</Link>
    </p>
  </Layout>
)

export default AboutPage
