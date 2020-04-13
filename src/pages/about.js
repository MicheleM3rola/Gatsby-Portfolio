import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import AboutLeft from "../component/aboutComponent/aboutLeft"
import Layout from "../component/layout/layout"
import Head from "../component/head"
import "../styles/about.scss"

const AboutPage = () => {
  const about = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/Michele.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout title="Who am I">
      <Head title="About" />
      <div className="about-container">
        <AboutLeft image={about.file.childImageSharp.fluid} />
      </div>
    </Layout>
  )
}

export default AboutPage
