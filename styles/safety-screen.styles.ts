import styled from "styled-components";

export const SafeScreenContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2.5rem;
  margin-block: 3rem;

`;

export const ImageContainer = styled.div`
  position: relative;
  height: 7.5rem;
  width: 7rem;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 25em) {
    height: 9.9375rem;
    width: 10.1819rem;
  }

  @media screen and (min-width: 47.9375em) {
    height: 14rem;
    width: 13rem;
  }

  @media screen and (min-width: 75em) {
    height: 21.875rem;
    width: 23.4375rem;
  }
`;

export const TextContainer = styled.div`
  & > h1 {
    font-size: 1.25rem;
    font-weight: 400;
    padding-bottom: 0.5rem;
  }

  & > p {
    font-weight: 700;
    font-size: 1.25rem;
  }

  @media screen and (min-width: 25em) {
    & > h1,
    & > p {
      font-size: 1.4rem;
    }
  }

  @media screen and (min-width: 47.9375em) {
    & > h1,
    & > p {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 75em) {
    & > h1,
    & > p {
      font-size: 2.5rem;
    }
  }

  @media screen and (min-width: 90em) {
    & > h1,
    & > p {
      font-size: 3rem;
    }
  }
`;
