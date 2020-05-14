import React from "react"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "../../styles/blog.scss"

const BlogPost = ({ title, slug, publishDate, subtitle, image }) => {
  return (
    <div className="post">
      <div className="bodyPost">
        <Img fluid={image} alt="Post" className="blogImg" />
      </div>
      <div className="cont-data">
        <AniLink fade to={`/blog/${slug}`}>
          <h3 className="title-post">{title}</h3>
        </AniLink>
        <p>{publishDate}</p>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default BlogPost
