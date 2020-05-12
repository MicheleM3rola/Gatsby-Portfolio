import React from "react"
import Layout from "../component/layout/layout"
import Head from "../component/head"
import ProjectDirectory from "../component/projectDirectory/ProjectDirectory"

const Projects = () => (
  <Layout title="My Works">
    <Head titlePage="Projects" />
    <ProjectDirectory />
  </Layout>
)

export default Projects
