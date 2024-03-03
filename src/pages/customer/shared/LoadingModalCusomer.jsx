import LoaderIcon from '@components/LoaderIcon'
import { styled } from 'styled-components'

const LoadingModalCusomer = () => {
  return (
    <Main>
      <LoaderIcon />
    </Main>
  )
}
export default LoadingModalCusomer

const Main = styled.div`
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
