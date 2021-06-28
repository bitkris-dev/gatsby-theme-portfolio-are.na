/** @jsx jsx **/
import { jsx, Styled } from 'theme-ui'

export default function PageTitle({ title, description }) {
  return (
    <section sx={{ maxWidth: ['90%', '75%', '75%', '50%'], py: 5 }}>
      {title && <Styled.h1 sx={{ m: 0 }}>{title}</Styled.h1>}
      {description && <Styled.p sx={{ fontSize: 3 }}>{description}</Styled.p>}
    </section>
  )
}
