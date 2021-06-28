/** @jsx jsx **/
import { jsx, Styled, Main, Container } from 'theme-ui'
import { Global } from '@emotion/core'

import Header from './Header'
import Footer from './Footer'
import AnimatedContent from './AnimatedContent'
import PageTitle from './PageTitle'
import SEO from './SEO'

export default function Layout(props) {
  const { children, pageContext } = props
  let { title, description } = props

  if (pageContext && pageContext.frontmatter) {
    title = pageContext.frontmatter.title
    description = pageContext.frontmatter.description
  }

  return (
    <Styled.root>
      <Global
        styles={{
          'html, body': {
            margin: 0,
            padding: 0,
          },
        }}
      />
      {pageContext && pageContext.frontmatter && (
        <SEO title={title} description={description} />
      )}
      <Header />
      <Main>
        <Container>
          <AnimatedContent
            sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}
          >
            <PageTitle title={title} description={description} />
          </AnimatedContent>
          <AnimatedContent delay={200}>{children}</AnimatedContent>
        </Container>
      </Main>
      <Footer>Hello</Footer>
    </Styled.root>
  )
}
