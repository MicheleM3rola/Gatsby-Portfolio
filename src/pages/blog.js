import React from "react"
import Layout from "../component/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import "./blog.scss"
import Head from "../component/head"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishDate(fromNow: true)
            body {
              json
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
            <div className="bodyPost">
              {documentToReactComponents(post.node.body.json)}
            </div>
            <p>{post.node.publishDate}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default BlogPage
