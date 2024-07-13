import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between; 
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

 >h3{
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2rem;

  @media (max-width: 62.5em) {
    font-size: 0.9375rem ;
  }
} 
`
export const Navbar = styled.nav`
  display: flex;  
  flex-direction: column;
  padding-left: 3.1rem;
  padding-top: 1.8rem;
  padding-bottom: 1rem;

  @media(max-width: 62.5em){
    padding: 0.5rem 1.5rem;
  }

  >h5{
      font-weight:300;
      font-size: 1.0938rem;
      text-transform: capitalize;
      margin-top: -0.4rem;
      margin-left: .0563rem;      

      @media (max-width: 62.5em){
        font-size: 0.4938rem;
        margin-top: -0.2rem;
      }
    }
`;

export const Logo = styled.div`
 position: relative;
 height: 2.75rem;
 width: 2.75rem;
 margin-left: -0.65rem;

 @media (max-width: 62.5em) {
  height:1.255rem;
  width: 1.255rem;
  margin-left: -0.35rem;
}
`;

export const Navlink = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto; 

  >ul{
  display: flex;
  align-items: center;
  gap: 1.4rem;
  margin-right: 2rem;
  
  @media(max-width:18.125em){
    gap: 0.45rem;
    margin-right: 1.5rem;
  }
  @media(max-width: 62.5em) and (min-width: 18.1875em){
    gap: 0.65rem;
    margin-right: 1.5rem;
  }

  >li{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem ;

    

    @media (max-width: 25em) {
      font-size: 0.65rem;
    }

    @media(max-width: 62.5em) and (min-width: 25.0625em) {
      font-size: 0.7rem;
    }

    >a{
      :first-child{
      margin-top: 0.15rem ;
    }
      

      &:visited {
        color:rgb(var(--color-black));
      }

      &:hover{
        opacity:0.8;
      }

      &:active {
        color:rgb(var(--color-black));
      }
    }
  }
  }
`
export const Button = styled.button`
  background-color: rgb(var(--color-black));
  background-color:rgb(var(--color-black));
  color: rgb(var(--color-white));
  border-radius: 0.9rem;
  width: 9.5rem;
  height: 2rem;
  font-size: 1rem;
  border: none;

  &:hover {
    opacity:0.8;
  }
  
  @media(max-width: 25em){
    width: 4.3rem;
    font-size: 0.45rem;
    height: 0.9rem;
    border-radius: 1.9rem;
  }
  @media (max-width: 62.5em) and (min-width: 25.0625em) {
    width: 5rem;
    font-size: 0.45rem;
    height: 1rem;
    border-radius: 1.9rem;
  }
` 