import { Container } from "./style"
import { PiPencilSimpleLineBold } from "react-icons/pi";

interface ButtonProps {
  title: string
}

export function Button({title}: ButtonProps) {

  return(
    <Container href="#">
      <PiPencilSimpleLineBold />
      <p>{title}</p>
    </Container>
  )
}