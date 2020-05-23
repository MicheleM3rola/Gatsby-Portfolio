import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from "../component/layout/layout"
import SEO from "../component/SEO"
import Bio from "../component/Bio/bio"
import "../styles/blog-temp.scss"
//export const query = graphql`

{
  /**This is used with markdown posts */
}

//query($slug: String) {
// markdownRemark(fields: { slug: { eq: $slug } }) {
//frontmatter {
//title
//date
//}
//html
//}
//}
//`

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title

      content {
        json
      }
    }
  }
`

const BlogTemplate = props => {
  const richTextDocument = {
    nodeType: "document",
    data: {},
    content: [
      {
        nodeType: "heading-2",
        content: [
          {
            nodeType: "text",
            value: "My Experience",
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
    ],
  }

  const {
    content: [
      {
        content: [{ value }],
      },
    ],
  } = richTextDocument

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className={paragraphClass(node)}>{children}</h2>
      ),
    },
  }

  const paragraphClass = node => {
    let className = "colorHeader"

    return className
  }

  return (
    <Layout title="Michele Merola" tempBlogLocation="/blog/">
      <SEO titlePage={props.data.contentfulBlogPost.title} />

      <div className="content-container">
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <div className="content-post">
          {documentToReactComponents(
            props.data.contentfulBlogPost.content.json,
            options
          )}
        </div>
        <Bio />
      </div>
    </Layout>
  )
}

export default BlogTemplate
