/** @jsx jsx **/
import { jsx } from 'theme-ui'
import { useSpring, animated } from 'react-spring'

export default function AnimatedContent({ delay = 0, ...props }) {
  const animatedProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    flex: 1,
    from: { opacity: 0, transform: 'translateY(20px)' },
    delay: delay,
  })
  return <animated.div style={animatedProps} {...props} />
}
