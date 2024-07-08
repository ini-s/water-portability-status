import styled from "styled-components";

export const HeaderWrapper = styled.header`
 display: flex;

 >ul{
 display: flex;
 align-items: center;
 margin-left: auto;
 gap: 1.25rem;
 margin-right: 2rem;
 }
`;

export const Navbar = styled.nav``;

export const Logo = styled.div`

>div{
  position: relative;
 height: 2.75rem;
 width: 2.75rem;
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
`;
