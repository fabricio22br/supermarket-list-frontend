import styled from 'styled-components'

export const Title = styled.h1`
  font-weight: bold;
  text-align: ${({ align }) => align || 'center'};
  font-size: ${({ fontSize }) => fontSize || 34}px;
  line-height: ${({ lineHeight }) => lineHeight || 24}px;
  color: black;
  margin-left: ${({ ml }) => ml || 14}px;

  @media (max-widht: 420px) {
    font-size: 18px;
    max-width: 300px;
  }
`

export const SubTitle = styled.h3`
  max-width: ${({ mw }) => mw || 452}px;
  text-align: ${({ align }) => align || 'center'};
  font-size: ${({ fontSize }) => fontSize || 16}px;
  font-weight: 500;
  margin: 0px;
  padding: 0px;
  margin-bottom: ${({ mb }) => mb || 28}px;

  @media (max-widht: 420px) {
    font-size: 12px;
    max-width: 300px;
    margin-bottom: ${({ mb }) => mb || 24}px;
  }
`
