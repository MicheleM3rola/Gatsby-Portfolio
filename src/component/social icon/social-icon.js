import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import "./social-icon.scss"

const SocialIcon = ({ social, id }) => {
  const data = useStaticQuery(graphql`
    query {
      twitter: file(relativePath: { eq: "images/Twitter.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      facebook: file(relativePath: { eq: "images/Facebook.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linkdin: file(relativePath: { eq: "images/Linkdin.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="container-social">
      <div className="inner">
        <div className="cont-img">
          {id === "Tw" ? (
            <Img fluid={data.twitter.childImageSharp.fluid} className="size" />
          ) : id === "Fb" ? (
            <Img fluid={data.facebook.childImageSharp.fluid} className="size" />
          ) : (
            <Img fluid={data.linkdin.childImageSharp.fluid} className="size" />
          )}
        </div>
        <h1>{social}</h1>
        <p>Visit My twitter profile</p>
      </div>
    </div>
  )
}

export default SocialIcon
