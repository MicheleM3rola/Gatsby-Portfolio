import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import AboutLeft from "../component/aboutComponent/aboutLeft"
import SkillList from "../component/skillList/skillList"
import Layout from "../component/layout/layout"
import SEO from "../component/SEO"
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

  const [checkSkill, setCheckSkill] = useState(false)

  const onClick = () => {
    return setCheckSkill(checkSkill => !checkSkill)
  }

  console.log(checkSkill)
  return (
    <Layout title="Who am I">
      <SEO titlePage="About" />
      <div className="about-container">
        <AboutLeft image={about.file.childImageSharp.fluid} />
        <SkillList showSkill={checkSkill} />
      </div>
      <div className="btn-cont">
        <button onClick={onClick} className="button">
          {checkSkill ? "Reset" : "Check My Skills"}
        </button>
      </div>
    </Layout>
  )
}

export default AboutPage
