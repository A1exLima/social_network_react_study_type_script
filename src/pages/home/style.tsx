import { styled } from "styled-components"

export const Container = styled.div`
  height: 100%;
`

export const Main = styled.main`
  max-width: 112rem;
  margin: 2rem auto 3rem;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 25.6rem 1fr;
  gap: 3.2rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`


export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

`