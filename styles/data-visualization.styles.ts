import styled from "styled-components";

export const DataVisualizationContainer = styled.div`
  & > div {
    display: flex;
  }
`;

export const CategorySelectionButtons = styled.div`
  padding: 0.9375rem 0 0 12.5rem;

  @media (max-width: 25em) {
    padding: 1.5rem 0 0 2.5rem;
  }

  @media (max-width: 37.5625em) and (min-width: 25.0625em) {
    padding: 1.5rem 0 0 6.5rem;
  }

  @media (max-width: 62.5em) and (min-width: 25em) {
    padding: 1.5rem 0 0 4.8rem;
  }

  & > button {
    width: 9.3225rem;
    height: 3.9444rem;
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
    padding-left: 3rem;
    margin: 0.5rem 0 0.2rem;
  }

  @media (max-width: 62.5em) and (min-width: 25.0625em) {
    font-size: 0.7rem;
    padding-left: 5.25rem;
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
    padding-left: 2rem;
  }
  @media (max-width: 62.5em) and (min-width: 25.0625em) {
    font-size: 0.7rem;
    padding-left: 6rem;
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
    width: 4rem;
    height: 13rem;
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
      height: 2.3rem;
      width: 4rem;
      font-size: 0.51rem;
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
    font-size: 0.7rem;

    &:hover {
      text-decoration: underline;
      opacity: 0.8;
    }
  }
`;
export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.4rem 0 0.1rem auto;
  width: 80%;

  @media (max-width: 25em) {
    margin: 0.3125rem 0 0.1875rem auto;
    width: 70%;
  }
  @media (max-width: 62.5em) and (min-width: 25.0625em) {
    width: 65%;
  }

  & > span {
    margin-right: 0.7rem;
    font-size: 0.8rem;

    @media (max-width: 25em) {
      font-size: 0.4rem;
    }
    @media (max-width: 62.5em) and (min-width: 25.0625em) {
      font-size: 0.5rem;
    }
  }
`;

export const ActualColor = styled.div`
  width: 0.625rem;
  height: 0.625rem;
  background-color: rgba(0, 153, 255, 0.5);
  margin-right: 0.3125rem;
  border-radius: 50%;

  @media (max-width: 25em) {
    width: 0.3rem;
    height: 0.3rem;
    margin-right: 0.2rem;
  }
  @media (max-width: 62.5em) and (min-width: 25.0625em) {
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.2rem;
  }
`;

export const PredictedColor = styled.div`
  width: 0.625rem;
  height: 0.625rem;
  background-color: rgb(var(--color-red));
  margin-right: 0.3125rem;
  border-radius: 50%;

  @media (max-width: 25em) {
    width: 0.3rem;
    height: 0.3rem;
    margin-right: 0.2rem;
  }
  @media (max-width: 62.5em) and (min-width: 25.0625em) {
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.2rem;
  }
`;
