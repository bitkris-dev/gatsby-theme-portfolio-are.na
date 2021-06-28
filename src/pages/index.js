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
          title
          description
        }
      }
    }
  `)

  const { title, description } = data.site.siteMetadata

  return (
    <Layout title={title} description={description}>
      <SEO description={description} />
      <ProjectsGrid />
    </Layout>
  )
}
