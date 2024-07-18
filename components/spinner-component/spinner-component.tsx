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
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const RotatingSpinner = styled.div`
  border: .25rem solid rgba(0, 0, 0, 0.1);
  border-left-color: rgb(var(--color-black));
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  animation: ${spin} 1s linear infinite;
`;

const Spinner = () => (
  <SpinnerWrapper>
    <RotatingSpinner />
  </SpinnerWrapper>
);

export default Spinner;
