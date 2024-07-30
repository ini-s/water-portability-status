import styled from "styled-components";

export const AlertContainer = styled.section`
  background-color: rgb(var(--color-yellow));
  padding-bottom: 1rem;

  p {
    font-size: 0.6875rem;
  }

  & > p {
    text-align: right;
    padding: 6px 0.8rem;
  }

  & > button {
    margin: 1rem 0.5rem 0 auto;
    display: block;
    font-size: 0.6875rem;
    font-weight: 800;
    padding: 0.5rem 1rem;
    background-color: rgba(13, 211, 255, 0.48);
    color: rgb(var(--color-black));
    border: none;
    border-radius: 8px;
  }

  @media screen and (min-width: 47.9375em) {
    order: 2;
    margin-top: 2.9rem;
  }

  @media screen and (min-width: 60.5625em) {
    p {
      font-size: 0.8rem;
    }

    & > button {
      margin-top: 2.4375rem;
    }
  }

  @media screen and (min-width: 75em) {
    p {
      font-size: 1rem;
    }
  }
`;

export const AlertText = styled.div`
  padding: 0.2662rem 1.81rem;

  @media screen and (min-width: 60.5625em) {
    padding: 0.5rem 2.5rem;
  }
`;

export const AlertHeading = styled.p`
  text-decoration: underline;

  @media screen and (min-width: 75em) {
    margin-top: 1.125rem;
  }
`;
