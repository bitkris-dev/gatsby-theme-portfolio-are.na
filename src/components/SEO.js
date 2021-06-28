import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

export default function SEO({ title, description }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          image
          twitterUsername
        }
      }
    }
  `)

  const documentTitle = [title, data.site.siteMetadata.title]
    .filter(Boolean)
    .join(' — ')

  return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>{documentTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta name="twitter:card" content="summary" />
      {data.site.siteMetadata.twitterUsername && (
        <meta
          name="twitter:site"
          content={data.site.siteMetadata.twitterUsername}
        />
      )}
      {data.site.siteMetadata.image && (
        <meta name="twitter:image" content={data.site.siteMetadata.image} />
      )}
      <meta name="twitter:title" content={documentTitle} />
      {description && <meta name="twitter:description" content={description} />}
    </Helmet>
  )
}
