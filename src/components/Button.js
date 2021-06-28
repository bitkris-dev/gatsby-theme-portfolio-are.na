/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function Button(props) {
  return (
    <button
      {...props}
      sx={{
        appearance: 'none',
        fontFamily: 'inherit',
        fontSize: 1,
        fontWeight: 'bold',
        m: 0,
        px: 2,
        py: 2,
        color: 'text',
        bg: 'muted',
        border: 0,
        borderRadius: 2,
        cursor: 'pointer',
        ':focus, &:hover': {
          outline: '2px solid',
        },
      }}
    />
  )
}
