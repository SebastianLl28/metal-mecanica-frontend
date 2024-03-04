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
  wrapperClass,
  error,
  isRequired = false,
  // disabled = false,
  ...args
}) => {
  const id = useId()

  return (
    <WrapperInput className={wrapperClass}>
      {label && (
        <label htmlFor={id}>
          <span>{label}</span>
          {isRequired && <span className='required'>*</span>}
        </label>
      )}
      <InputStyleComponent
        id={id}
        type={type}
        {...args}
        {...hookForm}
        $error={error}
        // disabled={disabled}
      />
      {error ? <span className='error'>{error.message}</span> : null}
    </WrapperInput>
  )
}

export default Input
