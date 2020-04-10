import React from "react"
import Layout from "../component/layout"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import "./blog.scss"
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
            <Link to={`/blog/${slug}`}>
              <div className="bodyPost">
                <Img fluid={fluid} alt="Post" className="blogImg" />
              </div>
              <div>
                <h3 className="title-post">{title}</h3>
              </div>
              <div>
                <p>{subtitle}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const data = graphql`
  {
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
