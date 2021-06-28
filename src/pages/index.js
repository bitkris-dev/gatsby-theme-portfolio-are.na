/** @jsx jsx **/
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ProjectsGrid from '../components/ProjectsGrid'

export default function HomePage(props) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          indexTitle
          indexDescription
        }
      }
    }
  `)

  const { indexTitle, indexDescription } = data.site.siteMetadata

  return (
    <Layout title={indexTitle} description={indexDescription}>
      <SEO description={indexTitle} />
      <ProjectsGrid />
    </Layout>
  )
}
