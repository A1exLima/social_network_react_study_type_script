import { Container, ContentCommentAndApplaud, Comment, Applaud, } from "./style"

import { AvatarImage } from "../avatarImage"
import avatar from "../../assets/profileImage.png"

import { RiDeleteBinLine } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { TbPointFilled } from "react-icons/tb";
import { useState } from "react";

interface CommentComponentProps {
  comment: string,
  onDeleteComment: (comment: string) => void
}

export function CommentComponent({comment, onDeleteComment}: CommentComponentProps) {
  const [ likeCount, setLikeCount] = useState(0)

  function deleteComment(){
    onDeleteComment(comment)
  }

  function handleClickLikeComment(){
    setLikeCount(prevState => prevState + 1)
  }

  return(
    <Container>
      <AvatarImage src={avatar} alt="" />

      <ContentCommentAndApplaud>
        <Comment>
          <header>
            <div className="comment-author">

              <div>
                <strong>Alex Lima </strong>
                <span>{`(Você)`}</span>
              </div>

              <time
                title="09 de fevereiro de 2024"
                dateTime="2024-02-09 às 09:23:34"
              >
                Cerca de 1h
              </time>
            </div>

            <RiDeleteBinLine onClick={deleteComment} />
          </header>

          <p>{comment}</p>
        </Comment>

        <Applaud 
          onClick={handleClickLikeComment} 
          $changeLikeColor={likeCount}
        >
          <BiLike />
          <span>Aplaudir</span>
          <TbPointFilled />
          <span>{likeCount.toString().padStart(2,"0")}</span>
        </Applaud>

      </ContentCommentAndApplaud>

    </Container>
  )
}