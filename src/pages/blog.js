import React from "react"
import Layout from "../component/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import "./blog.scss"
import Head from "../component/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishDate(fromNow: true)
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1 className="titleBlog">Dev Blog</h1>

      <ul className="post-list">
        {data.allContentfulBlogPost.edges.map(post => (
          <li className="post">
            <h3>
              <Link to={`/blog/${post.node.slug}`}>{post.node.title}</Link>
            </h3>
            <p>{post.node.publishDate}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default BlogPage
