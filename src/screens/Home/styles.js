import styled from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;

  @media (max-width: 420px) {
    overflow-x: hidden;
    overflow-y: hidden;
  }

  @media (max-widht: 830px) {
    overflow-x: hidden;
    overflow-y: hidden;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 552px;
  height: 620px;
  background-color: white;
  border-radius: 24px;

  @media (max-width: 420px) {
    max-width: 320px;
    max-height: 620px;
    padding: 12px;
  }
`

export const BagImage = styled.img.attrs({
  src: '/images/shopping-bag.png',
  alt: 'shopping-bag'
})`
  width: 220px;
  height: auto;

  @media screen and (max-widht: 420px) {
    width: 140px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 452px;
  margin-top: 24px;

  @media (max-width: 420px) {
    max-width: 300px;
    margin-top: 8px;
  }
`