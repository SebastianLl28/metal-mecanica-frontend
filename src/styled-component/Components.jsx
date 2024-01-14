import { styled } from 'styled-components'
import { Link as _Link } from 'react-router-dom'

export const Input = styled.input`
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

export const TableStyle = styled.table`
  width: 100%;
  min-height: 35rem;
  border: 1px solid #ddd;
  overflow-y: scroll;

  thead {
    background-color: #f8f9fa;
    text-align: center;
  }

  th,
  td {
    padding: 16px;
  }

  tr {
    border: 1px solid black;
  }

  .noData {
    text-align: center;
    font-size: 1.2em;
    line-height: 30rem;
  }
`
export const Title = styled.h2`
  font-size: 2.1em;
  font-weight: bold;
`
export const Button = styled.button.attrs(props => ({
  $padding: props.$padding || '.8em 1em',
  width: props.width || '100%',
  fontSize: props.fontSize || '1.1em'
}))`
  color: #fff;
  background-color: #6366f1;
  width: ${props => props.width};
  padding: ${props => props.$padding};
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: ${props => props.fontSize};

  transition: background-color 0.2s;

  &:hover {
    background-color: #5559ce;
  }
`

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Link = styled(_Link)`
  text-decoration: underline;
`

export const WrapperInput = styled.div`
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
`
