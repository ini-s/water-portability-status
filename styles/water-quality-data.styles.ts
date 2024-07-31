import styled from "styled-components";

export const WaterPortabilityScreen = styled.div`
  @media screen and (min-width: 90em) {
    margin: 0 auto;
    max-width: 90rem;
  }
`;

export const FlexContainer = styled.div`
  @media screen and (min-width: 60.5625em) 
  {
    margin-top: 2rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    align-items: start;
    gap: 4rem;
    padding: 0 2rem;
  }
  
  @media screen and (min-width: 75em) {
    gap: 6rem;
    padding: 0 4rem;
  }

  @media screen and (min-width: 90em) {
    padding: 0 5.5rem;
  }
`;
