import styled from 'styled-components'
import Header from './components/Header'
import Body from './components/Body'

const Dashboard = () => {
  return (
    <Main>
      <Header />
      <Body />
    </Main>
  )
}

export default Dashboard

const Main = styled.main`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
