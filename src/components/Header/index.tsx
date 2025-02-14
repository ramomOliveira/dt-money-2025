import { HeaderContainer, HeaderContent, NewTransactionButton } from './style'
import logoImg from '../../assets/logo.png'
import * as Dialog from '@radix-ui/react-dialog'
import NewTransactionModal from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="Logo Dt Money" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
