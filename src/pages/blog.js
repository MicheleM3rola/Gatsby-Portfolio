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
            <Link to={`/blog/${post.node.slug}`}>
              <div>
                <h3>{post.node.title}</h3>
              </div>
              <div className="bodyPost">
                <img src={post.node.image.fluid.src} alt="Post Image" />
              </div>
              <div>
                <p>{post.node.subtitle}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default BlogPage
