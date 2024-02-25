import { useId } from 'react'
import {
  WrapperInput,
  Input as InputStyleComponent
} from '../../styled-component/Components'

const Input = ({
  className,
  type = 'text',
  label,
  hookForm,
  error,
  ...args
}) => {
  const id = useId()

  return (
    <WrapperInput className='email'>
      {label && <label htmlFor={id}>{label}</label>}
      <InputStyleComponent
        id={id}
        type={type}
        {...args}
        {...hookForm}
        $error={error}
      />
      {error ? <span className='error'>{error.message}</span> : null}
    </WrapperInput>
  )
}

export default Input
