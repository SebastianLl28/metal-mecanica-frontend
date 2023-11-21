import styled from 'styled-components'
import Header from './components/Header'

const Dashboard = () => {
  return (
    <Main>
      <Header />
      <Title>this is a dashboard component</Title>
    </Main>
  )
}

export default Dashboard

const Main = styled.main`
  width: 100%;
  padding: 2rem;
`

const Title = styled.h2`
  text-align: center;
  font-size: 4em;
  /* color: #fff; */
`
