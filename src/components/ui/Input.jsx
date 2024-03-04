import { useId } from 'react'
import styled from 'styled-components'

const Input = ({
  className,
  type = 'text',
  label,
  hookForm,
  wrapperClass,
  error,
  isRequired = false,
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
      <InputStyle
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

const InputStyle = styled.input`
  background-color: #fff;
  border-radius: 5px;
  outline: none;
  width: 100%;
  color: black;
  padding: 0.7em 0.9em;
  border: 1px solid;
  border-color: ${({ $error }) => ($error ? 'red' : '#ccc')};
  &:focus {
    border: 1px solid;
    border-color: ${({ $error }) => ($error ? 'red' : '#000')};
  }
  &:disabled {
    background-color: #eee;
  }
`
const WrapperInput = styled.div`
  width: 100%;
  position: relative;

  & > label {
    font-size: 1.2rem;
    line-height: 1.8;
  }

  & > span.error {
    color: red;
    position: absolute;
    font-size: 0.8em;
    padding: 0.2em 0 0 0.3em;
  }

  & > label > .required {
    color: red;
  }
`
