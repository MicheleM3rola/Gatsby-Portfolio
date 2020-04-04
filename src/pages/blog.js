import React from "react"
import Layout from "../component/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import "./blog.scss"
import Head from "../component/head"

const BlogPage = props => {
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
    <Layout title="Michele Dev Blog">
      <Head title="Blog" />

      <ul className="post-list">
        {data.allContentfulBlogPost.edges.map(post => (
          <li className="post">
            <Link to={`/blog/${post.node.slug}`}>
              <div>
                <h3>{post.node.title}</h3>
              </div>
              <div className="bodyPost">
                <img src={post.node.image.fluid.src} alt="Post" />
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
