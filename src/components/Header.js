/** @jsx jsx **/
import {
  Header as ThemedHeader,
  useColorMode,
  jsx,
  Styled,
  Container,
  useThemeUI,
} from 'theme-ui'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Button from './Button'

export default function Header() {
  const [mode, setMode] = useColorMode()
  const { theme } = useThemeUI()

  const modes = ['light', ...Object.keys(theme.colors.modes)]

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          navItems {
            name
            slug
          }
        }
      }
    }
  `)

  const cycleMode = () =>
    setMode(modes[(modes.indexOf(mode) + 1) % modes.length])

  return (
    <ThemedHeader>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Styled.a
          as={Link}
          to="/"
          sx={{ color: 'text', textDecoration: 'none' }}
        >
          {data.site.siteMetadata.title}
        </Styled.a>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            mr: 4,
          }}
        >
          <nav sx={{ mr: 4 }}>
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
              {data.site.siteMetadata.navItems.map(({ slug, name }, index) => (
                <li key={index}>
                  <Styled.a
                    as={Link}
                    to={slug}
                    sx={{ color: 'text', textDecoration: 'none' }}
                  >
                    {name}
                  </Styled.a>
                </li>
              ))}
            </ul>
          </nav>
          <Button onClick={cycleMode}>{mode}</Button>
        </div>
      </Container>
    </ThemedHeader>
  )
}
