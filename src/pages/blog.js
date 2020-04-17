import React from "react"
import Layout from "../component/layout/layout"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import "../styles/blog.scss"
import Head from "../component/head"

const BlogPage = ({ data }) => {
  const {
    allContentfulBlogPost: { nodes },
  } = data
  return (
    <Layout title="Michele Dev Blog">
      <Head title="Blog" />

      <ul className="post-list">
        {nodes.map(({ title, slug, subtitle, image: { fluid } }) => (
          <li className="post">
            <div className="bodyPost">
              <Img fluid={fluid} alt="Post" className="blogImg" />
            </div>
            <div className="cont-data">
              <Link to={`/blog/${slug}`}>
                <h3 className="title-post">{title}</h3>
              </Link>
              <p>{subtitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const data = graphql`
  query {
    allContentfulBlogPost(sort: { order: DESC }) {
      nodes {
        title
        slug
        subtitle
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default BlogPage
