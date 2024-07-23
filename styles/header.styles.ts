import styled from "styled-components";

export const HeaderWrapper = styled.header``;

export const LogoContainer = styled.div`
  & > p {
    font-size: 0.5625rem;
  }

  & > div {
    display: flex;
    align-items: center;

    & > h3 {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 2rem;
    }

    @media (max-width: 62.5em) {
      & > h3 {
        font-size: 0.9375rem;
      }
    }
  }

  @media screen and (min-width: 62.5em) {
    & > p {
      font-size: 1rem;
    }
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  padding: 1.8rem 3.1rem 1rem;
  width: 100%;

  @media (max-width: 62.5em) {
    padding: 1rem 1.25rem;
  }

  & > h5 {
    font-weight: 300;
    font-size: 1.0938rem;
    text-transform: capitalize;
    margin-top: -0.4rem;
    margin-left: 0.0563rem;

    @media (max-width: 62.5em) {
      font-size: 0.57rem;
      margin-top: -0.19rem;
    }
  }
`;

export const Logo = styled.div`
  position: relative;
  height: 2.75rem;
  width: 2.75rem;
  margin-left: -0.65rem;

  @media (max-width: 62.5em) {
    height: 1.255rem;
    width: 1.255rem;
    margin-left: -0.35rem;
  }
`;

export const NavLink = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  & > ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.4rem;

    @media (max-width: 18.125em) {
      gap: 0.38rem;
    }
    @media (max-width: 62.5em) and (min-width: 18.1875em) {
      gap: 0.65rem;
    }

    & > li {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;

      @media (max-width: 62.5em) {
        font-size: 0.75rem;
      }

      & > a {
        &:visited {
          color: rgb(var(--color-black));
        }

        &:hover {
          opacity: 0.8;
        }

        &:active {
          color: rgb(var(--color-black));
        }
      }
    }
  }
`;
export const NotificationButton = styled.div`
  > button {
    border: none;
    margin-top: 0.2rem;
    font-size: 1.25rem;
    background-color: rgb(var(--color-white));

    @media (max-width: 62.5em) {
      font-size: 0.76rem;
    }
  }
`;
export const Button = styled.button`
  background-color: rgb(var(--color-black));
  background-color: rgb(var(--color-black));
  color: rgb(var(--color-white));
  border-radius: 0.5rem;
  width: fit-content;
  padding: 0.4rem 0.5rem;
  font-size: 0.56rem;
  font-size: 1rem;
  border: none;
  text-transform: uppercase;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 25em) {
    width: fit-content;
    font-size: 0.49rem;
    border-radius: 1.9rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }
  @media (max-width: 62.5em) and (min-width: 25.0625em) {
    width: 5.3rem;
    font-size: 0.55rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    border-radius: 1.9rem;
  }
`;

export const DateRangeBox = styled.div`
  position: absolute;
  top: 3rem;
`;
