import React from "react"
import Img from "gatsby-image"
import "./aboutLeft.scss"
const AboutLeft = ({ image }) => {
  return (
    <div className="container-left">
      <div className="aboutImg">
        <Img fluid={image} className="imgComp" />
      </div>
      <div className="paragraph-content">
        <p>
          <span className="first-word">H</span>i everyone,my name is Michele
          Merola
        </p>
      </div>
    </div>
  )
}

export default AboutLeft
