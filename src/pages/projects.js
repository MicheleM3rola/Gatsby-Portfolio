import React from "react"
import Layout from "../component/layout/layout"
import SEO from "../component/SEO"
import ProjectDirectory from "../component/projectDirectory/ProjectDirectory"

const Projects = () => (
  <Layout title="My Works">
    <SEO titlePage="Projects" />
    <ProjectDirectory />
  </Layout>
)

export default Projects
