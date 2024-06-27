import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  display: flex;
  justify-items: center;
  align-items: start;
  flex-direction: column;
  padding: 4rem;
  gap: 2rem;
`

export const Box = styled.div`
  width: ${props => props.$width || 'inherit'};
  height: ${props => props.$height || 'inherit'};
  padding: ${props => props.$padding || '0'};
  margin: ${props => props.$margin || '0'};
  background-color: ${props => props.$backgroundColor || 'transparent'};
  color: ${props => props.$color || 'inherit'};
  border: ${props => props.$border || 'none'};
  border-radius: ${props => props.$borderRadius || '0'};
  box-shadow: ${props => props.$boxShadow || 'none'};
  display: ${props => props.$display || 'block'};
  position: ${props => props.$position || 'static'};
`
