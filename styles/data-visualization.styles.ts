import styled from "styled-components";

export const DataVisualizationContainer = styled.div`
  & > div {
    display: flex;
  }
`;

export const CategorySelectionButtons = styled.div`
  padding: 0.9375rem 0 0 12.5rem;

  @media (max-width: 25em) {
    padding: 1.5rem 0 0 4.6rem;
  }

  @media (max-width: 37.5625em) and (min-width: 25.0625em) {
    padding: 1.5rem 0 0 6.5rem;
  }

  @media (max-width: 62.5em) and (min-width: 25em) {
    padding: 1.5rem 0 0 6rem;
  }

  & > button {
    width: 9.3225rem;
    height: 3.9444rem;
    background-color: #a9faff;
    border: none;
    font-weight: 700;
    font-size: 1.5537rem;

    @media (max-width: 25em) {
      width: 2.8188rem;
      height: 1.1875rem;
      font-size: 0.47rem;
      font-weight: 700;
    }
    @media (max-width: 37.5625em) and (min-width: 25.0625em) {
      width: 4.3rem;
      height: 2rem;
      font-size: 0.75rem;
      font-weight: 700;
    }
    @media (max-width: 62.5em) and (min-width: 37.5em) {
      width: 5rem;
      height: 2.3rem;
      font-size: 0.9rem;
      font-weight: 700;
    }
  }
`;

export const Title = styled.h1`
  text-transform: capitalize;
  text-decoration: underline;
  font-size: 1.5rem;
  padding-left: 14rem;
  margin-top: 1rem;

  @media (max-width: 25em) {
    font-size: 0.5rem;
    padding-left: 5rem;
    margin: 0.5rem 0 0.2rem;
    
  }

  @media (max-width: 62.5em) and (min-width: 25.0625em) {
    font-size: 0.7rem;
    padding-left: 7rem;
    margin: 0.7rem 0 0.4rem;
    
  }
`;
export const SubTitle = styled.p`
  text-align: center;
  text-transform: capitalize;
  font-weight: 500;
  padding-top: 0.3125rem;

  @media (max-width: 25em) {
    font-size: 0.5rem;
    padding-left: 0.5625rem;
  }
  @media (max-width: 62.5em) and (min-width: 25.0625em) {
    font-size: 0.7rem;
    padding-left: 1.5rem;
  }
`;

export const PropertySelectionButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 6rem;
  height: 17.125rem;
  font-size: 0.8125rem;
  font-weight: 700;
  background-color: rgb(var(--color-sky-blue));

  @media (max-width: 25em) {
    width: 1.8125rem;
    height: 5.1781rem;
  }

  @media (max-width: 37.5em) and (min-width: 25.0625em) {
    width: 3.5rem;
    height: 12rem;
  }
  @media (max-width: 62.5em) and (min-width: 37.5625em) {
    width: 4.1rem;
    height: 14rem;
  }

  & > button {
    border: none;
    width: 5.9375rem;
    height: 3.125rem;
    background-color: rgb(var(--color-light-blue));
    font-weight: 700;
    font-size: 0.8125rem;

    @media (max-width: 25em) {
      height: 0.8256rem;
      width: 1.795rem;
      font-size: 0.2975rem;
    }
    @media (max-width: 37.5em) and (min-width: 25.0625em) {
      height: 2rem;
      width: 3.5rem;
      font-size: 0.49rem;
    }
    @media (max-width: 62.5em) and (min-width: 37.5625em) {
      height: 2.5rem;
      width: 4rem;
      font-size: 0.59rem;
    }

    &:active {
      background-color: white;
    }
  }
`;

export const GraphBody = styled.div`
  display: flex;
`;
export const Softsensor = styled.div`
  width: 90%;
  margin: auto;
  & > button {
    border: none;
    background-color: rgb(var(--color-white));
    color: rgb(var(--color-dark-blue));
    margin-left: auto;
    cursor: pointer;

    @media (max-width: 21.8125em) {
      font-size: 0.6rem;
    }

    @media (max-width: 30.5625em) and (min-width: 21.875em) {
      font-size: 0.7rem;
    }

    @media (max-width: 43.125em) and (min-width: 30.625em) {
      font-size: 0.8rem;
    }

    &:hover {
      text-decoration: underline;
      opacity: 0.8;
    }
  }
`;
