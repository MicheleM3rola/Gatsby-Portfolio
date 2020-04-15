import React from "react"
import Img from "gatsby-image"

import "./social-icon.scss"

const SocialIcon = ({ social, icon }) => {
  console.trace(icon)
  return (
    <div className="container-social">
      <div className="inner">
        <h1>{social}</h1>
        <p>Visit My twitter profile</p>
      </div>
    </div>
  )
}

export default SocialIcon
