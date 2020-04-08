import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../component/layout"
import Head from "../component/head"
import "./indexes.scss"

const IndexPage = ({ data }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = data
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

        <Img fluid={fluid} className="img-container" alt="laptop" />
      </div>
    </Layout>
  )
}

export const data = graphql`
  query {
    file(relativePath: { eq: "images/HomePic.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default IndexPage
