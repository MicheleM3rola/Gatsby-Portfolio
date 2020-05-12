import React from "react"
import "./footerBlog.scss"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const FooterBlog = () => {
  const data = useStaticQuery(graphql`
    {
      author: site {
        siteMetadata {
          author
        }
      }

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
    <div className="ft">
      <p>
        Created by {data.author.siteMetadata.author} all copyright reserved 2020
      </p>
      <ul className="list-icons">
        <li className="icons">
          <a href="https://twitter.com/MicheleMerola15" target="__blank">
            <Img fluid={data.twitter.childImageSharp.fluid} />
          </a>
        </li>
        <li className="icons">
          <a href="https://www.facebook.com/merolasalvatore/" target="__blank">
            <Img fluid={data.facebook.childImageSharp.fluid} />
          </a>
        </li>
        <li className="icons">
          <a
            href="https://www.linkedin.com/in/michele-merola/"
            target="__blank"
          >
            <Img fluid={data.linkdin.childImageSharp.fluid} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default FooterBlog
