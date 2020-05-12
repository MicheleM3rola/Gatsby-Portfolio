import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "./ProjectCard.scss"

const CardHover = ({ title, description, tech, link }) => {
  return (
    <div className="wrapperHover">
      <div className="contTech">
        <span className="tech">{tech}</span>{" "}
      </div>
      <h2>{title}</h2>
      <p>{documentToReactComponents(description)}</p>

      <a href={link} target="_blank">
        Go To The Page
      </a>
    </div>
  )
}

export default CardHover
