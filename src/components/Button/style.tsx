import { styled } from "styled-components"

export const Container = styled.a`
  background: transparent;
  border-radius: .8rem;
  border: .1rem solid ${({theme})=> theme.COLORS.greenLight};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1.6rem 2.4rem 1.4rem 2.4rem;
  color: ${({theme})=> theme.COLORS.greenLight};

  transition: all .4s ease-in-out;

  &:hover {
    background: ${({theme})=> theme.COLORS.green};
    border-radius: .8rem;
    color: ${({theme})=> theme.COLORS.white};
  }

  > svg {
    width: 2rem;
    height: 2rem;
  }

  > p {
    font-weight: 700;
  }


`