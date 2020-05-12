import React from "react"
import Layout from "../component/layout/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "../styles/blog.scss"
import Head from "../component/head"

const BlogPage = ({ data }) => {
  const {
    posts: { nodes },
  } = data
  return (
    <Layout title="Michele Dev Blog" locationFooter="/blog">
      <Head titlePage="Blog" />

      <ul className="post-list">
        {nodes.map(
          ({ title, slug, subtitle, image: { fluid }, publishDate }) => (
            <li className="post">
              <div className="bodyPost">
                <Img fluid={fluid} alt="Post" className="blogImg" />
              </div>
              <div className="cont-data">
                <AniLink fade to={`/blog/${slug}`}>
                  <h3 className="title-post">{title}</h3>
                </AniLink>
                <p>{publishDate}</p>
                <p>{subtitle}</p>
              </div>
            </li>
          )
        )}
      </ul>
      <div>Pagination</div>
    </Layout>
  )
}

export const data = graphql`
  query($skip: Int!, $limit: Int!) {
    posts: allContentfulBlogPost(
      skip: $skip
      limit: $limit
      sort: { order: DESC }
    ) {
      nodes {
        title
        slug
        subtitle
        publishDate(formatString: "dddd MMMM Do,YYYY")
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
