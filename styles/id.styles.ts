import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2rem;
  }
`;

export const WaterParametersContainer = styled.div`
  flex: 1;
  margin: 1rem;
  box-sizing: border-box;
  min-width: 0; 
  order: 1;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    order: 2;
  }
`;

export const AlertContainer = styled.div`
  flex: 1;
  margin: 1rem;
  padding: 2rem;
  box-sizing: border-box;
  min-width: 0; 
  order: 2;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    margin: 0.5rem 0;
    order: 1;
  }
`;
