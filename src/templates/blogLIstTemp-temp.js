import React from "react"
import Layout from "../component/layout/layout"
import SEO from "../component/SEO"
import BlogPost from "../component/blog/blogPost"
import { graphql } from "gatsby"

import "../styles/blog.scss"

const BlogListTemplate = props => {
  const { data } = props

  console.log(props)

  return (
    <Layout title="Michele Dev Blog" locationFooter="/blog">
      <SEO titlePage="Blog" />
      <div>
        <ul className="post-list">
          {data.posts.nodes.map(node => (
            <li className="post">
              <BlogPost
                title={node.title}
                slug={node.slug}
                subtitle={node.subtitle}
                publishDate={node.publishDate}
                image={node.image.fluid}
              />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulBlogPost(
      skip: $skip
      limit: $limit
      sort: { order: DESC, fields: publishDate }
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

export default BlogListTemplate
