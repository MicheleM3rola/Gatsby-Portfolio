import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "./bio.scss"

const Bio = () => {
  const data = useStaticQuery(graphql`
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
    <div className="bio-container">
      <div className="cont-bio">
        <div className="cont-img">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <div className="cont-paragraph">
          <p>
            Hi my name is Michele I live in Western Australia and I am the
            creator of this blog, made it to improve my coding and writing
            skills.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Bio
