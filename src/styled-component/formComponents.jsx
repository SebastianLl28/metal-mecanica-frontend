import { styled } from 'styled-components'

export const Input = styled.input`
  background-color: #fff;
  border-radius: 5px;
  outline: none;
  width: 100%;
  color: black;
  padding: 0.7em 0.9em;
  border: 1px solid #ccc;
  &:focus {
    border: 1px solid #000;
  }
  &:disabled {
    background-color: #eee;
  }
`
