const path = require("path")

{
  /**This is used with markdown posts */
}
//module.exports.onCreateNode = ({ node, actions }) => {
// const { createNodeField } = actions

//if (node.internal.type === "MarkdownRemark") {
//const slug = path.basename(node.fileAbsolutePath, ".md")

//createNodeField({
///node,
//name: "slug",
//value: slug,
//})
// }
//}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve("./src/templates/blog-temp.js")

  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  // amount of posts
  const posts = res.data.allContentfulBlogPost.edges
  // posts per page
  const postsPerPage = 5
  // how many pages
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/pages/blog.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
