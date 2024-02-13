import {
  Container,
  AuthorContent,
  PostContent,
  FormContent,
} from "./style"

import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"

import { format, formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale/pt-BR"

import { AvatarImage } from "../avatarImage"
import { CommentComponent } from "../comment"

interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: PostType
}


export function Post({ post }: PostProps) {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("")
  const whenNewCommentIsEmpty = newComment.length === 0
  
  const [ publishedDateFormatted ] = useState(
    format(
      post.publishedAt, 
      "dd 'de' LLLL 'ás' HH:mm'h'", 
      {locale: ptBR}
    )
  )

  const [ publishedDateRelativeToNow ] = useState(
    formatDistanceToNow(
      post.publishedAt, 
      {
        locale: ptBR, 
        addSuffix: true
      }
    )
  )

  function handleNewComment(e: FormEvent){
    e.preventDefault()
    
    if(newComment){
      setComments((prevState) => [...prevState, newComment])
    }
    
    setNewComment("")
  }

  function handleCapturingTheValueOfTextArea(e: ChangeEvent<HTMLTextAreaElement>){
    e.target.setCustomValidity("")
    setNewComment(e.target.value)
  }

  function handleInvalidFieldText(e: InvalidEvent<HTMLTextAreaElement>){
    e.target.setCustomValidity("Esse campo é obrigatório")
  }

  function deleteComment(commentToBeDeleted: string){
    let newArrayCommentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToBeDeleted  
    })

    setComments(newArrayCommentsWithoutDeletedOne)
  }

  return(
    <Container>
      <AuthorContent>
        <div className="author">
          <AvatarImage 
            src={post.author.avatarUrl}
          />

          <div>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          className="publication-time"
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </AuthorContent>

      <PostContent>
        {
          post.content.map((content) => (
            content.type === "paragraph" ? <p key={content.content} >{content.content}</p> :
            content.type === "link" ? <p key={content.content} className="post-link">🧬 <a href={content.content}>{content.content}</a></p> :
            null
          ))
        }
      </PostContent>

      <FormContent onSubmit={handleNewComment}>
        <label htmlFor="comment">Deixe seu feedback</label>

        <textarea
          id="comment"
          placeholder="Escreva um comentário..."
          onChange={handleCapturingTheValueOfTextArea}
          value={newComment}
          onInvalid={handleInvalidFieldText}
          required 
        />

        <footer>
          <button type="submit" disabled={whenNewCommentIsEmpty} >Publicar</button>
        </footer>
      </FormContent>

      {
        comments.reverse().map((comment)=> (
          <CommentComponent 
            key={comment} 
            comment={comment}
            onDeleteComment={deleteComment}
          />
        ))
      }
    </Container>
  )
}