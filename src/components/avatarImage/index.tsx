import { Container } from "./style.js"
import { ImgHTMLAttributes } from "react"

interface AvatarImageProps extends ImgHTMLAttributes<HTMLImageElement>{}

export function AvatarImage({...props}: AvatarImageProps) {

  return(
    <Container >
      <img 
        {...props}
      />
    </Container>
  )
}