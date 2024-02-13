import { styled } from "styled-components"

export const Container = styled.aside`
  background: ${({theme})=> theme.COLORS.gray2};
  border-radius: .8rem;
  overflow: hidden;

  > img {
    width: 100%;
    height: 7.2rem;
    object-fit: cover;
  }

  > footer {
    height: 10.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ProfileImageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 4.4rem 0 2.4rem;
  border-bottom: .2rem solid ${({theme})=> theme.COLORS.gray3};
  position: relative;

  > div {
    position: absolute;
    top:-3.5rem;
  }

  > strong {
    color: ${({theme})=> theme.COLORS.gray7};
    font-weight: 700;
    line-height: 1.6;
  }

  > span {
    color: ${({theme})=> theme.COLORS.gray5};
    font-size: 1.4rem;
    line-height: 1.6;
  }
`