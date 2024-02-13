import { styled } from "styled-components"

export const Container = styled.section`
  background: ${({theme})=> theme.COLORS.gray2};
  padding: 4rem;
  border-radius: .8rem;
`

export const AuthorContent = styled.header`
  display: flex;
  justify-content: space-between;

  .author {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 1.6rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    } 

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 1.6;

      > strong {
        font-weight: 600;
      }

      >span {
        font-size: 1.4rem;
        color: ${({theme})=> theme.COLORS.gray5};
      }
    }
  }

  .publication-time {
    font-size: 1.4rem;
    color: ${({theme})=> theme.COLORS.gray5};
    user-select: none;
  }
`

export const PostContent = styled.div`
  border-bottom: 1px solid ${({theme})=> theme.COLORS.gray3};;
  padding: 2.4rem 0 0;
  line-height: 1.6;

  > p:nth-child(1), p:nth-child(2){
    color: ${({theme})=> theme.COLORS.gray6};
    padding-bottom: 2rem;
  }


  .post-link {
    padding-bottom: 2rem;
    font-weight: 600;

    > a {
      color: ${({theme})=> theme.COLORS.greenLight};
      padding-right: .5rem;
    }
  }
`

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 2.4rem;

  > label {
    padding-bottom: 1.6rem;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.6;
    color: ${({theme})=> theme.COLORS.gray7};
    cursor: pointer;
  }

  > textarea {
    background: ${({theme})=> theme.COLORS.gray1};
    border-radius: 8px;
    border: none;
    outline: 1px solid ${({theme})=> theme.COLORS.gray1};

    width: 100%;
    height: 9.6rem;
    padding: 1.3rem 1.6rem;
    resize: none;

    color: ${({theme})=> theme.COLORS.gray6};
    line-height: 1.4;

    transition: all .4s ease-in-out;

    &:hover {
      outline: 1px solid ${({theme})=> theme.COLORS.greenLight};
    }

    &:focus {
      outline: 1px solid ${({theme})=> theme.COLORS.greenLight};
    }

    &::placeholder{
      color: ${({theme})=> theme.COLORS.gray4};
      font-size: 1.5rem;
    }
  }

  footer {
    visibility: hidden;
    max-height: 0;

    > button[type=submit] {
      background: ${({theme})=> theme.COLORS.green};
      border: none;
      margin-top: 1.6rem;
      padding: 1.6rem 2.4rem 1.4rem;
      border-radius: 8px;

      color: ${({theme})=> theme.COLORS.white};
      font-weight: 600;

        cursor: pointer;

      transition: background .4s ease-in-out;

      &:not(:disabled):hover {
        background: ${({theme})=> theme.COLORS.greenLight};
      }
    }

    > button[type=submit]:disabled {
      opacity: .5;
      cursor: not-allowed;
    }
  }

  &:focus-within footer {
    visibility: visible;
    max-height: none;
  }
`