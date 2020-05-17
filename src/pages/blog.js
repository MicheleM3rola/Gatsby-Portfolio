import React from "react"
import Layout from "../component/layout/layout"
import BlogListTemplate from "../templates/blogLIstTemp-temp"
import SEO from "../component/SEO"

const BlogPage = () => {
  return (
    <Layout title="Michele Dev Blog" locationFooter="/blog">
      <SEO titlePage="Blog" />
      <BlogListTemplate />
    </Layout>
  )
}

export default BlogPage
