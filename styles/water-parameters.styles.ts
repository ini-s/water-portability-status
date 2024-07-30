import styled from "styled-components";

export const WaterParametersContainer = styled.section`
  margin-top: 3.5rem;
  padding: 0 1.6rem;

  & > p {
    font-size: 1.5rem;
    font-family: "Karantina", system-ui;
    letter-spacing: 6px;
    text-align: center;
    margin-bottom: 0.4rem;
  }

  & > div {
    width: 100%;
    overflow-x: scroll;
  }

  @media screen and (min-width: 47.9375em) {
    & > p {
      font-size: 2.5rem;
    }
  }

  @media screen and (min-width: 60.5625em) {
    order: 1;

    margin-top: 0;
    padding: 0;
  }
`;

export const Table = styled.table`
  font-size: 0.625rem;
  border-collapse: collapse;
  width: 100%;

  & > thead {
    background-color: rgb(var(--color-light-grey));
    th {
      padding: 0.4rem 1rem;
    }
  }

  & > tbody {
    td {
      text-align: center;
      white-space: nowrap;
      padding: 0.5rem 1rem;
    }
  }

  @media screen and (min-width: 47.9375em) {
    font-size: 0.75rem;
    margin: 0 auto;
  }
`;
