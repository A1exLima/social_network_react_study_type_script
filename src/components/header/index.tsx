import { Container } from "./style"
import ignite from "../../assets/ignite.svg"

export function Header() {

  return(
    <Container>
      <p>Social Network</p>
      <img src={ignite} alt="logotipo do Ignite" />
    </Container>
  )
}