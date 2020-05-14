import React from "react"
import Layout from "../component/layout/layout"
import BlogListTemplate from "../templates/blogLIstTemp-temp"
import Head from "../component/head"

const BlogPage = () => {
  return (
    <Layout title="Michele Dev Blog" locationFooter="/blog">
      <Head titlePage="Blog" />
      <BlogListTemplate />
    </Layout>
  )
}

export default BlogPage
