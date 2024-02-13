import { Container } from "./style"
import ignite from "../../assets/ignite.svg"

export function Header() {

  return(
    <Container>
      <img src={ignite} alt="logotipo do Ignite" />
    </Container>
  )
}