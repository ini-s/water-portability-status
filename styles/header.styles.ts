import styled from "styled-components";

export const HeaderWrapper = styled.header`
 display: flex;

 >ul{
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 1.4rem;
  margin-right: 1rem;
  margin-top: -0.625rem;

 >a{
  &:visited {
    color: black;
  }

  &:hover{
    color:#333;
  }

  &:active {
    color: black;
  }
  @media (max-width: 35rem) {
    font-size: 0.5rem;
    margin-top:  0.3125rem;
    gap: 0.5rem;
  }
 }

}

`;

export const Navbar = styled.nav`
  display: flex;
  padding: 0.9rem 2rem;
  
  >div{

    >h3{
      text-transform: uppercase;
      font-weight: 700;
      font-size: 2rem;

      @media (max-width: 35rem) {
        font-size: 0.9375rem ;
      }
    }

    >h5{
      font-weight:300;
      font-size: 1.0938rem;
      text-transform: capitalize;
      margin-top: -0.3438rem;

      @media (max-width: 35rem) {
        font-size: 0.4938rem;
        margin-top: -0.12rem;
      }
    }
 }
 @media (max-width: 35rem) {
  padding: 0.9rem 1.4rem;
 }
`;

export const Logo = styled.div`
 position: relative;
 height: 2.75rem;
 width: 2.75rem;
 margin-left: -0.75rem;
 margin-top: -0.3063rem;

 @media (max-width: 35rem) {
  height:1.255rem;
  width: 1.255rem;
  margin-left: -0.35rem;
  margin-top: -0.1rem;
}

`;

export const Button = styled.button`
text-transform: uppercase;
background-color: black;
color: white;
border-radius: 0.5rem;
width: 8rem;
height: 1.625rem;
font-size: 0.6875rem;
border: none;

&:hover {
  background-color: #333;
  }
  @media (max-width: 35rem) {
    width: 4rem;
    height: 1rem;
    border-radius: 0.6rem;
    font-size: 0.3125rem;

   
  }
`;
