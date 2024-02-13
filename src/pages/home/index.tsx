import { Container, Wrapper, Main } from "./style"

import { Header } from "../../components/header"
import { SideBar } from "../../components/sideBar"
import { Post, PostType } from "../../components/post";


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/glaucia86.png",
      name: "Glaucia",
      role: "Developer Advocate II"
    },
    content: [
      { type: 'paragraph', content: "Fala galera 👋" },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: 'link', content: "https://www.linkedin.com/in/glaucialemos/" },
    ],
    publishedAt: new Date("2024-01-08 20:56:45"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/matheushenriquefs.png",
      name: "Matheus Henrique",
      role: "Desenvolvedor Full Stack Jr"
    },
    content: [
      { type: 'paragraph', content: "Boa tarde pessoal 🙏" },
      { type: 'paragraph', content: "Hoje completo 10 anos de empresa, e para comemorar vim aqui agradecer a todos que me apoiaram nessa jornada" },
      { type: 'link', content: "https://www.linkedin.com/in/matheushenriquefs/" },
    ],
    publishedAt: new Date("2024-02-10 8:20:10"),
  },
];

export function Home() {

  return(
    <Container>
      <Header/>

      <Main>
        <SideBar/>

        <Wrapper>
          {
            posts.map((post) => (
              <Post 
                key={post.id} 
                post={post}
              />
            ))
          }
        </Wrapper>

      </Main>
    </Container>
  )
}