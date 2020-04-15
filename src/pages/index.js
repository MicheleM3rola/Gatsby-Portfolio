import React from "react"
import Layout from "../component/layout/layout"
import Head from "../component/head"
import SocialIcon from "../component/social icon/social-icon"
import Typical from "react-typical"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/indexes.scss"

const IndexPage = props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/Twitter.png" }) {
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
          <SocialIcon social="Twitter" icon={data} />
        </div>

        <div>
          <SocialIcon social="Linkedin" />
          <SocialIcon social="Facebook" />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
