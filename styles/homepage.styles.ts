import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;

  & > h1 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 3.8rem;

    @media (max-width: 23.125em) {
      font-size: 1rem;
    }
    @media (max-width: 34.4375em) and (min-width: 23.1875em) {
      font-size: 1.3rem;
    }
    @media (min-width: 34.375em) {
      font-size: 1.85rem;
    }
    @media (min-width: 50em) {
      font-size: 2.5rem;
    }
    @media (min-width: 68.1875em) {
      font-size: 3rem;
    }
    @media (min-width: 81.25em) {
      font-size: 3.2rem;
    }
    @media screen and (min-width: 90em) {
      font-size: 3.5rem;
      line-height: 5.1612rem;
    }
  }

  & > h2 {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 2.7rem;
    margin: 0.8rem 0 2rem;

    @media (max-width: 23.125em) {
      font-size: 0.7rem;
      margin: 0.6rem 0 0.1rem;
    }
    @media (max-width: 34.4375em) and (min-width: 23.1875em) {
      font-size: 0.95rem;
      margin: 0.7rem 0 0.2rem;
    }
    @media (min-width: 34.375em) {
      font-size: 1.2rem;
      margin: 0.8rem 0 0.5rem;
    }
    @media (min-width: 50em) {
      font-size: 1.5rem;
    }
    @media (min-width: 68.1875em) {
      font-size: 2rem;
    }
    @media (min-width: 81.25em) {
      font-size: 2.2rem;
    }
    @media screen and (min-width: 90em) {
      font-size: 2.5rem;
      line-height: 4.265rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.7rem;
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  margin: 1.5rem 0;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.77rem;
  width: 46rem;
  border-radius: 4.5rem;

  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 34.4375em) {
    width: 12.4rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-weight: 300;
    margin: 0.45rem 0;
    font-size: 0.6rem;
    border-radius: 1.7rem;
  }
  @media (max-width: 34.4375em) and (min-width: 23.1875em) {
    width: 16.31rem;
    padding-top: 0.58rem;
    padding-bottom: 0.58rem;
    font-weight: 500;
    font-size: 0.72rem;
    border-radius: 1.5rem;
    margin: 0.6rem 0;
  }
  @media (min-width: 34.375em) {
    width: 23.2rem;
    height: 2.4rem;
    font-weight: 500;
    margin: 0.65rem 0;
    font-size: 0.9rem;
    border-radius: 1.5rem;
  }
  @media (min-width: 50em) {
    width: 30rem;
    height: 3.4rem;
    font-weight: 600;
    margin: 0.7rem 0;
    font-size: 1.3rem;
    border-radius: 1.5rem;
  }

  @media (min-width: 68.1875em) {
    width: 36rem;
    height: 3.8rem;
    font-weight: 600;
    margin: 1rem 0;
    font-size: 1.5rem;
    border-radius: 2rem;
  }
  @media (min-width: 81.25em) {
    width: 42rem;
    height: 4rem;
    font-weight: 700;
    font-size: 1.7rem;
    border-radius: 3rem;
    margin: 1.2rem 0;
  }

  @media screen and (min-width: 90em) {
    padding: 1rem 1rem;
  }
`;
