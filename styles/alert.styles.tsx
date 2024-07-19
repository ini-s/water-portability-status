import styled from "styled-components";

export const AlertContainer = styled.div`
  width: 90%;
  height: auto;
  max-width: 45.6875rem;
  padding: 1rem;
  //padding-top: -2rem;
  border: 1px solid rgba(255, 255, 255, 1);
  box-shadow: 0 0 0.625rem 0, 0, 0;
  text-align: left;
  background-color: #fae1007d;
  padding-bottom: 1rem;
  box-sizing: border-box;
  //margin-top: 2.5rem;
  //margin-left: 4rem;

  @media (max-width: 768px) {
    padding: 0.6rem;
    // margin-top: 62rem;
    margin-left: 0.1rem;
    height: auto;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin-top: 1rem;
  }
  @media (max-width: 1400px) {
    padding: -0.5rem;
    margin-top: 2.1rem;
  }
  @media (max-width: 1305px) {
    //padding: 10rem;
    margin-top: 2.5rem;
    height: auto;
  }
  @media (max-width: 995px) {
    // padding: -0.5rem;
    margin-top: 2.5rem;
    //margin-left: 6rem;
  }

  h1 {
    margin-bottom: 0.2rem;
    text-decoration: underline;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.94px;

    @media (max-width: 768px) {
      font-size: 12px;
      line-height: 14px;
    }

    @media (max-width: 480px) {
      font-size: 10px;
      line-height: 12px;
    }
  }

  p {
    line-height: 16.94px;
    margin-bottom: 0rem;
    color: #e20303;
    font-weight: 600;
    padding-bottom: 0.6rem;
    font-size: 0.875rem;
    font-family: "Inter", sans-serif;

    @media (max-width: 768px) {
      font-size: 0.75rem;
      line-height: 14px;
    }

    @media (max-width: 480px) {
      font-size: 0.625rem;
      line-height: 12px;
    }
  }

  p:first-of-type {
    text-align: right;
    color: black;
    font-weight: 400;
    font-size: 0.875rem;
    font-family: "Inter", sans-serif;
    padding-top: 0px;
    padding-bottom: 1rem;
    padding-right: 1rem;

    @media (max-width: 768px) {
      font-size: 0.75rem;
      padding-right: 0.5rem;
      padding-bottom: 0.5rem;
    }

    @media (max-width: 480px) {
      font-size: 0.625rem;
      padding-right: 0.25rem;
      padding-bottom: 0.25rem;
    }
  }
  button {
    margin-left: auto;
    display: block;
    font-size: 11px;
    font-weight: 800;
    padding: 0.5rem 1rem;
    background-color: #0DD3FF7A;
    color: black;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-family: "Inter", sans-serif;
  }
`;
