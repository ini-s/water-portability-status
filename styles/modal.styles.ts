import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(0.1062rem);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: rgb(var(--color-light-blue));
  padding: 1.25rem;
  border-radius: 3.125rem;
  width: 33.5625rem;
  height: 18.4375rem;
  box-shadow: 0 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 22.6875em){
    width: 16.875rem;
    height: 12.5rem;
    border-radius: 1.5rem;
  }
  @media (max-width: 35.5625em) and (min-width: 22.75em) {
    width: 21rem;
    height: 12.5625rem;
    border-radius: 2rem;
  }
  @media (max-width: 42.5em) and (min-width: 35.625em) {
    width: 32rem;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h2 {
    font-size: 1.5rem;
    margin-bottom: 0.625rem;
    font-weight: 700;

    @media (max-width: 22.6875em){
      font-size: .9rem;
      margin-bottom: 0.28rem;
    }

    @media (max-width: 35.5625em) and (min-width: 22.75em) {
      font-size: 1.1875rem;
      margin-bottom: 0.4rem;
    }
  }

  & > button {
    background-color: rgb(var(--color-dark-blue));
    border: none;
    border-radius: 0.8rem;
    margin: auto;
    font-size: 0.8962rem;
    font-weight: 800;
    padding: .25rem .5rem;
    color: rgb(var(--color-white));

    
    @media (max-width: 35.5625em){
      padding: .125rem .375rem;
      font-size: .5625rem;
    }
  }
`;

export const DataRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-bottom: 1.25rem;
 
  @media (max-width: 35.5625em){
    width: 100%;
    margin-bottom: 0.1rem;
  }
  @media (max-width: 42.5em) and (min-width: 35.625em) {
    width: 90%;
  }
`;

export const DataItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.375rem;

  @media (max-width: 22.6875em){
    margin-bottom: .4rem;
  }
  @media (max-width: 35.5625em) and (min-width: 22.75em){
    margin-bottom: 0.36rem;
  }
`;

export const Label = styled.div`
  font-size: 1rem;
  font-weight: 500;
  
  @media (max-width: 22.6875em){
    font-size: .625rem;
  }
  @media (max-width: 35.5625em) and (min-width: 22.75em) {
    font-size: .6819rem;
  }
`;

export const Value = styled.div`
  font-size: 0.875rem;
  background-color: rgb(var(--color-light-grey));
  border: 0.0625rem solid rgb(var(--color-black));
  height: 1.4375rem;
  width: 7.5rem;
  border-radius: 0.3125rem;
  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 22.6875em){
    font-size: .625rem;
    width : 5.0625rem;
    height : .9375rem;
  }
  @media (max-width: 35.5625em) and (min-width: 22.75em){
    font-size: .6819rem;
    width: 5.1144rem;
    height: .98rem;
  }
`;

export const CloseButton = styled.button``;
