import { styled } from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

const Link = ({ children, to }) => {
  return <SyleLink to={to}>{children}</SyleLink>
}

export default Link

const SyleLink = styled(RouterLink)`
  text-decoration: underline;
`
