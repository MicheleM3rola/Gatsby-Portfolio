import React from "react"
import Layout from "../component/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import "./blog.scss"
import Head from "../component/head"
import Img from "gatsby-image"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { order: DESC }) {
        edges {
          node {
            title
            slug
            subtitle
            image {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h2>Dev Blog</h2>

      <ul className="post-list">
        {data.allContentfulBlogPost.edges.map(post => (
          <li className="post">
            <h3>
              <Link to={`/blog/${post.node.slug}`}>{post.node.title}</Link>
            </h3>

            <img src={post.node.image.fluid.src} alt="Post Image" />

            <p>{post.node.subtitle}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default BlogPage
