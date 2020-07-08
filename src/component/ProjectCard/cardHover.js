import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { FaGithub } from "react-icons/fa"
import "./ProjectCard.scss"

const CardHover = ({ title, description, tech, link, gitLink }) => {
  return (
    <div className="wrapperHover">
      <div className="contTech">
        <span className="tech">{tech}</span>{" "}
      </div>
      <h2>{title}</h2>
      <p>{documentToReactComponents(description)}</p>

      <a href={link} target="_blank" class="liveApp">
        Go To The Page
      </a>
      <a href={gitLink} target="_blank">
        <FaGithub className="gitIcon" />
      </a>
    </div>
  )
}

export default CardHover
