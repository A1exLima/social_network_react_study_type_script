import { styled } from "styled-components";

interface ChangeLikeColorProps {
  $changeLikeColor: number;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;
  padding: 3.2rem 0 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  > div:first-child {
    border: transparent;
    margin-left: -.5rem;
    margin-top: -.4rem;
    
    > img {
      width: 5rem;
      height: 5rem;
      margin-left: 0;
    }
  }
`;

export const ContentCommentAndApplaud = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Comment = styled.div`
  border-radius: 8px;
  padding: 1.6rem 1.6rem 2.5rem;
  background: ${({theme})=> theme.COLORS.gray8};

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .comment-author {
      width: fit-content;
      display: flex;
      flex-direction: column;
      line-height: 1.6;


      > div {
        font-size: 1.4rem;
        font-weight: 600;

        > strong {
          color: ${({theme})=> theme.COLORS.gray7};
        }

        > span {
          color: ${({theme})=> theme.COLORS.gray5};
        }
      }

      > time {
        font-size: 1.2rem;
        line-height: 1.6;
        color: ${({theme})=> theme.COLORS.gray5};
      }
    }

    > svg {
      font-size: 2.2rem;
      color: ${({theme})=> theme.COLORS.gray5};
      cursor: pointer;

      transition: color .4s ease-in-out;

      &:hover {
        color: ${({theme})=> theme.COLORS.redDanger};

      }
    }

  }

  > p {
    font-size: 1.4rem;
    line-height: 1.6;
    color: ${({theme})=> theme.COLORS.gray6};
  }

`;

export const Applaud = styled.div<ChangeLikeColorProps>`
  display: flex;
  align-items: center;
  gap: .5rem;
  color: ${({theme, $changeLikeColor}) => $changeLikeColor ? 
    theme.COLORS.green: 
    theme.COLORS.gray5}
  ;
  user-select: none;
  cursor: pointer;

  transition: color .2s ease-in-out;

  &:hover {
    color: ${({theme, $changeLikeColor}) => $changeLikeColor ? 
      theme.COLORS.greenLight : 
      theme.COLORS.gray7}
    ;
  }

  > svg:first-child {
    font-size: 2.3rem;
    padding-bottom: .3rem;
  }

  > svg:nth-child(3) {
    font-size: 1rem;
  }
  > span {
    font-size: 1.4rem;
    font-weight: 600;
  }
`;
