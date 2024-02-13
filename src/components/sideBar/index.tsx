import { Container, ProfileImageContent } from "./style"

import { Button } from "../Button"
import { AvatarImage } from "../avatarImage"

import avatar from "../../assets/profileImage.png"

export function SideBar() {

  return(
    <Container>
      <img
        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <ProfileImageContent>
        <AvatarImage
          src={avatar}
        />

        <strong>Alex Lima</strong>

        <span>Developer Front-end</span>
      </ProfileImageContent>

      <footer>
        <Button
          title="Editar seu perfil"
        />
      </footer>
    </Container>
  )
}