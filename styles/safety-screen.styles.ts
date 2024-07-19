import styled from "styled-components";

export const SafeScreenContainer = styled.div`
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: 3rem;
  display: flex;

  h1 {
    //margin-top: 2.5rem;
    line-height: 4.5rem;
    font-family: "Inter", sans-serif;
    font-size: 3rem;
    font-weight: 700;
  }

  h2 {
    //margin-top: 0.5rem;
    //margin-right: 14rem;
    //text-align: center;
    font-family: "Inter", sans-serif;
    font-size: 3rem;
    font-weight: 400;
  }
  

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
      font-weight: 700;
      padding-bottom: 0rem;
      width: 100%;
      margin-left: 0.3rem;
      line-height: 1.5rem;
      //padding-top: -5em;
      
    }
    h2 {
      padding-bottom: 0.8rem;
      font-size: 2rem;
      margin-left: 2.7rem;
      font-weight: 400;
    }
    
  }
  @media (max-width: 480px) {
      h1 {
        font-size: 1.5rem;
        margin-left: 0.2rem;
        //padding-left: 0%.2rem;
      }
      h2 {
        font-size: 1.5rem;
        //padding-left: 10rem;
       // align-items: left;
      }
  }
  @media (max-width: 1400px) {
    h2 {
          padding-left: 1px;
          margin-left: 0.001rem;
    }
  }
  @media (max-width: 340px) {
    h1 {
      font-size: 1.2rem;
      font-weight: 700;
      padding-bottom: 0rem;
      margin-left: 2.8rem;
      padding-right: 1.5rem;
      //line-height: 1.5rem;
      //padding-top: -5em;
      
    }
    h2 {
      padding-bottom: 0.5rem;
      font-size: 1.2rem;
      margin-left: 1.5rem;
      font-weight: 400;
    }
  }
  @media (max-width: 290px) {
    h1 {
      font-size: 1rem;
      font-weight: 700;
      padding-bottom: 0rem;
      margin-left: 0.5rem;
      padding-right: 0.5rem;
      //line-height: 1.5rem;
      //padding-top: -5em;
      
    }
    h2 {
      padding-bottom: 0.5rem;
      font-size: 1rem;
      margin-left: 0.5rem;
      padding-right: 0.5rem;
      font-weight: 400;
    }
  }
`;
export const ImageContainer = styled.div`
  max-width: 150px; /* Set a maximum width for the image container */
  margin-top: 0rem;
  margin-left: 0.1rem;
  justify-content: center;

  img {
    width: 150%; /* Ensure the image fits within the container */
    height: auto;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  
`;