import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from 'components'
import { SAVE_USERNAME_PATH } from 'services/constants'
import {
  ScreenContainer,
  ContentContainer,
  BagImage,
  Title,
  SubTitle,
  ButtonContainer
} from './styles'

export const HomeScreen = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')

  const onClickContinue = () => {
    if (username.length < 4) {
      alert('username deve conter mais de 3 caracters')
      return
    }
    localStorage.setItem(SAVE_USERNAME_PATH, username)
    navigate('/list')
  }

  return (
    <ScreenContainer>
      <ContentContainer>
        <BagImage />
        <Title>Sua lista de supermercado mais fácil do que nunca</Title>
        <SubTitle>
          Ajudamos você a organizar sua lista de compras de forma descomplicada.
        </SubTitle>

        <SubTitle mw={452} align="left" mb={16}>
          Digite abaixo seu usuário para ter acesso a sua lista de compras:
        </SubTitle>

        <Input
          onChange={(text) => setUsername(text)}
          value={username}
          label="Username"
          placeholder="Ex: usuario1"
        />
        <ButtonContainer>
          <Button onClick={onClickContinue}>Continuar</Button>
        </ButtonContainer>
      </ContentContainer>
    </ScreenContainer>
  )
}
