import { styled } from 'styled-components'
import CardHeader from './CardHeader'

const Header = () => {
  return (
    <div>
      <List>
        <CardHeader
          title='Orders'
          number={20}
          image='order-icon.webp'
          alt='order icon'
        />
        <CardHeader
          title='Clientes'
          number={20}
          image='order-icon.webp'
          alt='order icon'
        />
        <CardHeader
          title='Usuarios'
          number={20}
          image='order-icon.webp'
          alt='order icon'
        />
      </List>
    </div>
  )
}

export default Header

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`
