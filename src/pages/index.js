import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../component/layout/layout"
import Head from "../component/head"
import Typical from "react-typical"
import "../styles/indexes.scss"

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
        <div className="container-title">
          <h1 className="title">Hi my name is Michele Merola</h1>
          <p className="typical">
            {" "}
            I'm a{" "}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "Developer",
                2000,
                "Gamer",
                2000,
                "Father",
                2000,
                "Husband",
                2000,
              ]}
            />
          </p>
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
