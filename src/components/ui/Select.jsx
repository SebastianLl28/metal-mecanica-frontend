import { Box } from '@styled/Boxs'
import { Text } from '@styled/Text'
import { useId } from 'react'
import styled from 'styled-components'

const Select = ({
  children,
  label,
  wrapperClass,
  hookForm,
  args,
  isRequired,
  error
}) => {
  const id = useId()
  return (
    <Box $width='100%' $position='relative' className={wrapperClass}>
      {label && (
        <Text as='label' $fontSize='1.2em' $lineHeight='1.8' htmlFor={id}>
          {label}
          {isRequired && (
            <Text as='span' $color='red'>
              *
            </Text>
          )}
        </Text>
      )}
      <SelectStyle id={id} {...args} {...hookForm} $border={!!error}>
        {children}
      </SelectStyle>
      {error && (
        <Text
          as='span'
          $color='red'
          $fontSize='0.8em'
          $position='absolute'
          $bottom='0'>
          {error.message}
        </Text>
      )}
    </Box>
  )
}

export default Select

const SelectStyle = styled.select`
  border: 1px solid;
  padding: 0.7em 0.9em;
  border-radius: 5px;
  width: 100%;
  border-color: ${({ $error }) => ($error ? 'red' : '#ccc')};

  & .error {
    color: red;
    font-size: 0.8em;
    position: absolute;
    bottom: -1.5em;
  }
`
