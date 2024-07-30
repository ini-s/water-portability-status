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
    font-size: 0.938rem;
    text-transform: capitalize;
    margin-top: -0.6rem;
    margin-left: 0.0563rem;

    @media (max-width: 62.5em) {
      font-size: 0.57rem;
      margin-top: -0.19rem;
    }
  }
`;

export const Logo = styled.div`
  position: relative;
  height: 2.2rem;
  width: 2.2rem;
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
      font-size: 1.2rem;

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
    margin-top: 0.3rem;
    font-size: 1rem;
    background-color: rgb(var(--color-white));

    @media (max-width: 62.5em) {
      font-size: 0.76rem;
    }
  }
`;
interface ButtonProps {
  isActive: boolean;
}

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
    opacity: 0.4;
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
export const ErrorMessage = styled.p`
  color: rgb(var(--color-red));
  font-size: 12px;

  @media (max-width: 25em) {
    font-size: 6px;
  }
  @media (max-width: 62.5em) and (min-width: 25.0625em) {
    font-size: 8px;
  }
`;

export const SelectRange = styled.p`
  font-size: 0.9rem;
  font-weight: 700;

  @media (max-width: 25em) {
    font-size: 0.45rem;
  }

  @media (max-width: 62.5em) and (min-width: 25.0625em) {
    font-size: 0.6rem;
  }
`;
export const DateRangeBox = styled.div`
  text-align: center;
  position: absolute;
  top: 5rem;
  right: 2.1rem;
  border: 0.0625rem solid black;
  border-radius: 0.3125rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.3rem;
  width: auto;
  gap: 0.45rem;
  height: auto;

  @media (max-width: 25em) {
    gap: 0.25rem;
    top: 2.6rem;
    right: 0.5rem;
    padding: 0.28rem;
  }

  @media (max-width: 62.5em) and (min-width: 25.0625em) {
    top: 2.8rem;
    gap: 0.3rem;
    right: 0.6rem;
    padding: 0.13rem;
  }

  & > input {
    background-color: rgb(var(--color-light-grey));
    border: 0.0625rem solid rgb(var(--color-black));
    padding: 0.3rem 0.1rem;
    cursor: pointer;
    margin: auto;
    border-radius: 0.4375rem;
    text-align: center;
    text-transform: uppercase;

    ::placeholder {
      color: rgb(var(--color-black));
      opacity: 1;
    }

    &::-webkit-input-placeholder {
      color: rgb(var(--color-black));
      opacity: 1;
    }

    @media (max-width: 25em) {
      width: 3.75rem;
      font-size: 0.43rem;
      padding: 0.13rem;
      border-radius: 0.3rem;
    }
    @media (max-width: 62.5em) and (min-width: 25.0625em) {
      padding: 0.15rem;
      width: 4.5rem;
      font-size: 0.5rem;
    }
  }

  & > button {
    text-transform: capitalize;
    background-color: rgb(var(--color-black));
    color: rgb(var(--color-white));
    font-size: 0.625rem;
    border-radius: 0.5rem;
    padding: 0.2rem 0.7rem;

    @media (max-width: 25em) {
      padding: 0.09rem 0.2rem;
      font-size: 0.4rem;
    }
    @media (max-width: 62.5em) and (min-width: 25.0625em) {
      padding: 0.1rem 0.49rem;
      font-size: 0.46rem;
    }
  }
`;
