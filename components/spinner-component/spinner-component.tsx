// components/spinner/Spinner.tsx
import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

  &>p{
    font-weight: 700;
    font-size: 1.25rem;

    @media(max-width: 37.5em){
      font-size: .9375rem;
      font-weight: 600;
    }
  }
`;

const RotatingSpinner = styled.div`
  border: .6rem solid rgba(0, 0, 0, 0.1);
  border-left-color: rgb(var(--color-black));
  border-radius: 50%;
  width: 4rem;
  height:4rem;
  animation: ${spin} 1s linear infinite;
  margin-bottom: .625rem;

  @media(max-width: 37.5em){
    width: 2.3rem;
    height: 2.3rem;
    border: .35rem solid rgba(0, 0, 0, 0.1);
    border-left-color: rgb(var(--color-black));
  }
`;

const Spinner = () => (
  <SpinnerWrapper>
    <RotatingSpinner />
    <p>Loading...</p>
  </SpinnerWrapper>
);

export default Spinner;
