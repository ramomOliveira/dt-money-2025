import { HeaderContainer, HeaderContent, NewTransactionButton } from './style'
import logoImg from '../../assets/logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="Logo Dt Money" />
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
