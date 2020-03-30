import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp {
        fluid {
          src
        }
      }
    }
  `)

  return (
    <div className="bio-container">
      <p>
        Hi my name is Michele I live in Western Australia and I am the creator
        of this blog, made it to improve my coding and writing skills
      </p>
    </div>
  )
}

export default Bio
