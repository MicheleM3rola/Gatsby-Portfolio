import React from "react"
import ProjectCard from "../ProjectCard/ProjectCard"
import CardHover from "../ProjectCard/cardHover"

import { graphql, useStaticQuery } from "gatsby"
import "./ProjectDirectory.scss"

const ProjectDirectory = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjectCard {
        nodes {
          title
          technologies
          description {
            json
          }
          link

          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <ul className="wrapperProjects">
        {data.allContentfulProjectCard.nodes.map((card, index) => (
          <li>
            <ProjectCard key={index} image={card.image.fluid}>
              <CardHover
                title={card.title}
                description={card.description.json}
                tech={card.technologies}
                link={card.link}
              />
            </ProjectCard>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectDirectory
