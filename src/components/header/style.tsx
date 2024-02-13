import { styled } from "styled-components"

export const Container = styled.header`
  background: ${({theme})=> theme.COLORS.gray2};
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  > h1 {
    font-size: 2.56rem;
    font-weight: 700;
    line-height: 160%;
    font-family: var(--font-roboto);
    color: ${({theme})=> theme.COLORS.gray7};
  }

  > img {
    width: 4rem;
  }
`