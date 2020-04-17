import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
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
          Merola, I am an aspiring web developer, After these couple of years
          trying to study web development, working and taking care of my family,
          I finally decide to create a presence on the web, not just because
          everyone has it, but the main reason is because I think it will help
          me to learn better tracking my works. You can read more about me in my
          first{" "}
          <Link to="/blog/contentful" className="blogPost">
            Blog Post
          </Link>{" "}
          and also just next to my presentation you can find my expertise coding
          related and social.
        </p>
      </div>
    </div>
  )
}

export default AboutLeft
