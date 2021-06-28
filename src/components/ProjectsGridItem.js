/** @jsx jsx **/
import { jsx, Styled } from 'theme-ui'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import useImageBackgroundColor from '../hooks/useImageBackgroundColor'

export default function ProjectsGridItem({ item }) {
  const imageBackgroundColor = useImageBackgroundColor()
  return (
    <article>
      {item.children.slice(0, 1).map((block, index) => (
        <Styled.a as={Link} to={`/${item.slug}`} key={index}>
          {block.image && (
            <Img
              backgroundColor={imageBackgroundColor}
              fluid={block.image.childImageSharp.fluid}
            />
          )}
        </Styled.a>
      ))}
      <Styled.h3 sx={{ mb: 2 }}>
        <Styled.a
          as={Link}
          to={`/${item.slug}`}
          sx={{ textDecoration: 'none' }}
        >
          {item.title}
        </Styled.a>
      </Styled.h3>
      <Styled.p sx={{ mt: 0 }}>{item.metadata.description}</Styled.p>
    </article>
  )
}
