import styled from 'styled-components'

const CardHeader = ({ title, number, image, alt }) => {
  return (
    <Main>
      <Title>{title}</Title>
      <Container>
        <img src={image} alt={alt} />
        <Number>{number}</Number>
      </Container>
    </Main>
  )
}

export default CardHeader

const Main = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 2rem;
  box-shadow:
    rgba(0, 0, 0, 0.04) 0px 5px 22px,
    rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px;
  display: grid;
  gap: 1em;
`
const Title = styled.h2`
  font-size: 1.2em;
  font-weight: lighter;
  color: #797979;
`
const Number = styled.p`
  font-size: 2.8em;
  font-weight: bold;
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > img {
    width: 4.2rem;
  }
`
