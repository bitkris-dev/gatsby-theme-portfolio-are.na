/** @jsx jsx **/
import { jsx, Styled } from 'theme-ui'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ProjectsGrid from '../components/ProjectsGrid'
import SEO from '../components/SEO'
import useImageBackgroundColor from '../hooks/useImageBackgroundColor'

export default function ProjectTemplate(props) {
  const {
    title,
    metadata: { description },
    children,
  } = props || {}
  const backgroundImageColor = useImageBackgroundColor()

  return (
    <Layout title={title} description={description}>
      <SEO title={title} description={description} />
      <section sx={{ display: 'grid', gridAutoFlow: 'row', gridGap: 4 }}>
        {children
          .filter((item) => item.__typename === 'ArenaBlock')
          .map((item, index) => {
            return (
              <div className="margin-bottom-s" key={index}>
                <Img
                  backgroundColor={backgroundImageColor}
                  fluid={item.image.childImageSharp.fluid}
                />
              </div>
            )
          })}
      </section>
      <section sx={{ py: 5 }}>
        <Styled.h3 sx={{ fontSize: 5 }}>All projects</Styled.h3>
        <ProjectsGrid />
      </section>
    </Layout>
  )
}
