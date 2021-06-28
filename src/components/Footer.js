/** @jsx jsx **/
import { jsx, Footer as ThemedFooter, Styled, Container } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            name
            url
          }
        }
      }
    }
  `)
  return (
    <ThemedFooter>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <nav>
          <ul
            sx={{
              margin: 0,
              padding: 0,
              listStyle: 'none',
              display: 'grid',
              gridAutoFlow: 'column',
              gridGap: 3,
            }}
          >
            {data.site.siteMetadata.social.map(({ url, name }, index) => (
              <li key={index}>
                <Styled.a href={url} target="_blank" rel="noopener">
                  {name}
                </Styled.a>
              </li>
            ))}
          </ul>
        </nav>
        <span>&copy; {new Date().getFullYear()}</span>
      </Container>
    </ThemedFooter>
  )
}
