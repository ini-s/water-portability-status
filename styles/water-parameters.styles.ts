import styled from "styled-components";

export const CombinedContainer = styled.div`
  //justify-content: center;
  //align-items: center;
  text-align: center;
  margin-top: 0rem;
  padding: 0.5rem;


  h2 {
    text-align: left;
    font-family: Karantina;
    line-height: 60px;
    font-size: 30px;
    margin-left: 3rem;
    font-weight: 700;
    letter-spacing: 20%;
    

    @media (max-width: 768px) {
      font-size: 24px;
      margin-left: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 5px;
      margin-left: 0.5rem;
      text-align: center;
      margin-bottom: -1rem;
    }
    @media (max-width: 1084px) {
      font-size: 22px;
      margin-left: 0.1rem;
      text-align: center;
      margin-bottom: -1rem;
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const WaterParametersContainer = styled.div`
  width: 100%;
  //height: auto;
  box-sizing: border-box;
  //overflow-x: auto;

  table {
    border-collapse: collapse;
    margin-bottom: 0rem;
    border-spacing: 1rem;
    font-size: 11px;
    //width: 60%;

    @media (max-width: 768px) {
      font-size: 10px;
      border-spacing: 0.5rem;
      font-weight: 300;
    }

    @media (max-width: 480px) {
      font-size: 9px;
      border-spacing: 0.1rem;
      font-weight: 300;
    }
    
  }

  th,
  td {
    border: none;
    text-align: left;
    padding: 0.5rem;

    @media (max-width: 768px) {
      padding: 0.4rem;
    }

    @media (max-width: 480px) {
      padding: 0.3rem;
    }
    @media (min-width: 290px) {
        padding: 3.2px;
    }
  }
  td:nth-child(2),
  th:nth-child(2),
  th:nth-child(3),
  td:nth-child(3),
  th:nth-child(4),
  td:nth-child(4),
  th:nth-child(5),
  td:nth-child(5),
  th:nth-child(7),
  td:nth-child(7),
  th:nth-child(8),
  td:nth-child(8) {
    text-align: center;
  }

  th {
    background-color: rgb(221, 221, 221);
    //border-bottom: 1rem solid rgb(221, 221, 221);
    padding: 0.5rem 0rem 0.01rem 1rem;

    @media (max-width: 768px) {
      padding: 0.4rem 0.8rem 0.01rem 0.8rem;
    }

    @media (max-width: 480px) {
      padding: 0.3rem 0.3rem 0.2rem 0.6rem;
    }
  }

  td {
    padding-left: 1rem;
    padding-bottom: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.5rem;

    @media (max-width: 768px) {
      padding-left: 0.8rem;
      padding-bottom: 0.4rem;
      padding-right: 0.4rem;
      padding-top: 0.4rem;
    }

    @media (max-width: 480px) {
      padding-left: 0.2rem;
      padding-bottom: 0.3rem;
      padding-right: 0.1rem;
      padding-top: 0.3rem;
    }
  }

  tr:nth-child(even) {
    background-color: white;
  }
`;
