import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../component/layout"
import Head from "../component/head"
import "./indexes.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "index.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout title="Welcome to my Portfolio">
      <Head title="Home" />
      <div className="container">
        <div className="title-cont">
          <ul className="title">
            <li className="name">Michele</li>
            <li className="name-two">Merola</li>
            <li className="name">Front-end</li>
            <li className="name-two">Web-developer</li>
          </ul>
        </div>
        <div className="img-container">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
