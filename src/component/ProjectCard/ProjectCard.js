import React from "react"
import BackgroundImage from "gatsby-background-image"

import "./ProjectCard.scss"

const ProjectCard = ({ image, children }) => {
  return (
    <BackgroundImage Tag="section" fluid={image} className="bgImg">
      {children}
    </BackgroundImage>
  )
}

export default ProjectCard
