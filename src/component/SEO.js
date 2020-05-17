import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

//ALSO CALLED SEO COMPONENT

const SEO = ({ titlePage, descriptionFromPage }) => {
  const helmet = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          image
          siteUrl
          twitterUsername
        }
      }
    }
  `)

  const {
    title,
    description,

    image,
    siteUrl,
    twitterUsername,
  } = helmet.site.siteMetadata

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${titlePage} | ${helmet.site.siteMetadata.title}`}
    >
      <meta name="description" content={descriptionFromPage || description} />
      <meta name="image" content={image} />

      {/*Facebook Card*/}

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />

      {/* twitter Card*/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SEO
