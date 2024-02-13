import { styled } from "styled-components"

export const Container = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 8px;
  border: 2px solid ${({theme})=> theme.COLORS.greenLight};
  background: ${({theme})=> theme.COLORS.gray2};
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 4.9091rem;
    height: 4.9091rem;
    border-radius: 5px;
    margin-left: .1rem;  }
`