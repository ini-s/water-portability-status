import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;

   > h1{
      text-transform: uppercase;
      font-weight: 400;
      font-size: 4.25rem;

      @media(max-width: 20rem){
        font-size: 1.1875rem;
      }

      @media (max-width:39.375rem) and (min-width:20.0625rem){
        font-size: 1.4375rem;
      }    

      @media (max-width:59.375rem) and (min-width:39.4375rem){
        font-size: 2.8125rem;
      }
    
    }

   > h2{
      text-transform: capitalize;
      font-weight: 700;
      font-size: 2.875rem;
      margin-top: 0.5rem;

      @media(max-width :20rem){
        font-size: 1rem
      }
      @media (max-width:39.375rem) and (min-width:20.0625rem){
        font-size: 1.25rem;
      }  
      @media (max-width:59.375rem) and (min-width:39.4375rem){
        font-size: 1.875rem;
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
  cursor: pointer;
  margin: 0.625rem 0;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.77rem;
  width: 54rem;
  height: 4.6rem;
  border-radius: 4.44rem;
  
  &:hover {
    background-color: #333;
  }
 
  @media(max-width: 20rem){
    width: 15rem;
    height: 1.54rem;
    font-weight: 400;
    font-size: 0.7rem;
    border-radius: 1.7rem;
  }
  @media (max-width:39.375rem) and (min-width:20.0625rem){
    width: 18.0625rem;
    height: 1.8rem;
    font-weight: 500;
    font-size: 0.9rem;
    border-radius: 1.5rem;
  } 
  @media (max-width:59.375rem) and (min-width:39.4375rem){
    width: 30rem;
    height: 2.5rem;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 2rem;
  }
 
`;
