import styled from 'styled-components'
import { useCustomer } from '../../../hooks/useCustomer'
import { useAuthStore } from '../../../store/tokenStore'

const CreateOrder = ({ close }) => {
  const { token } = useAuthStore()

  const { data: customerRes, isLoading, isError } = useCustomer(token, {})

  return (
    <Main>
      <h2>Crear Orden</h2>

      {!isLoading &&
        !isError &&
        customerRes &&
        // <WrapperInput className=''>
        // <label htmlFor={clientId}>Cliente</label>
        // <Input type='text' id={clientId} list={dataList} />
        // <datalist id={dataList}>
        //   {customerRes.data.results.map(({id, name}) => (
        //     <option key={id}>{name}</option>
        //   ))}
        // </datalist>
        {
          /* <datalist id={dataList}>
            <option value='1'>1asdas</option>
            <option value='x'>sadasx</option>
            <option value='s'>sdasdddsss</option>
          </datalist> */
        }
        // </WrapperInput>
      }
    </Main>
  )
}

export default CreateOrder

const Main = styled.main`
  & > h2 {
    font-size: 1.8em;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
  }
`
