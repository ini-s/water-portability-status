import styled from "styled-components";

export const NotificationsContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 90em) {
    max-width: 87rem;
    margin: 0 auto;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 87%;
  margin: auto;
  border-spacing: 0;

  th,
  td {
    font-size: 0.6875rem;
    padding: 0.5rem;
    text-align: left;

    @media (max-width: 43.75em) {
      padding: 0.3rem;
      font-size: 0.4375rem;
    }
  }

  th {
    background-color: rgb(var(--color-light-grey));
    text-transform: uppercase;
    font-weight: 400;
  }

  td {
    text-transform: capitalize;
  }
`;

export const NotificationHeader = styled.div`
  display: flex;
  margin: auto;
  width: 87%;
  margin-top: 0.9375rem;

  & > h1 {
    text-transform: uppercase;
    font-family: "Karantina", system-ui;
    font-weight: 400;
    letter-spacing: 0.45rem;
    font-size: 2.5rem;
    padding-left: 20rem;

    @media (max-width: 28.125em) {
      padding-left: 0;
      font-size: 1rem;
      letter-spacing: 0.19rem;
    }

    @media (max-width: 43.75em) and (min-width: 28.1875em) {
      padding-left: 0;
      font-size: 1.5rem;
      letter-spacing: 0.3rem;
    }
    @media (max-width: 66.25em) and (min-width: 43.8125em) {
      padding-left: 0;
    }
  }
`;

export const FilterBox = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
  margin-left: auto;
  gap: 0.25rem;

  @media (max-screen: 43.75em) {
    gap: 0.1rem;
  }

  & > p {
    font-size: 0.5625rem;
    font-weight: 700;

    @media (max-width: 43.75em) {
      font-size: 0.3125rem;
    }
  }

  & > input {
    border: 0.06rem solid rgb(var(--color-black));
    border-radius: 0.5rem;
    text-transform: uppercase;
    background-color: rgb(var(--color-light-grey));
    font-size: 0.53rem;
    font-weight: 800;
    height: 1.7rem;
    width: 4rem;

    @media (max-width: 20em) {
      width: 1.9rem;
      height: 0.6rem;
      font-size: 0.18rem;
      border-radius: 0.2rem;
    }

    @media (max-width: 43.75em) and (min-width: 20.0625em) {
      width: 2.0838rem;
      height: 0.7987rem;
      font-size: 0.2rem;
      border-radius: 0.2rem;
    }
  }

  &::-webkit-datetime-edit {
    padding: 1em;
  }

  &::-webkit-datetime-edit-fields-wrapper {
  }

  &::-webkit-datetime-edit-text {
  }

  &::-webkit-datetime-edit-month-field {
  }

  &::-webkit-datetime-edit-day-field {
  }

  &::-webkit-datetime-edit-year-field {
  }

  &::-webkit-inner-spin-button {
    display: none;
  }

  &::-webkit-calendar-picker-indicator {
  }
`;

export const FilterButton = styled.div`
  display: flex;
  flex-direction: column;

  & > button {
    background-color: rgb(var(--color-black));
    color: rgb(var(--color-white));
    border: none;
    border-radius: 0.59rem;
    padding: 0.18rem 0.5rem;
    text-transform: capitalize;
    cursor: pointer;
    margin-bottom: 0.3rem;
    font-size: 0.39rem;
    font-weight: 800;

    @media (max-width: 43.75em) {
      padding: 0.05rem 0.3rem;
      margin-bottom: 0.15rem;
      font-size: 3.3px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const SearchBox = styled.div`
  margin-left: auto;
`;

export const PaginationBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5rem;

  @media (max-width: 66.25em){
    display: flex;
    justify-content: center;
  }

  & > ul {
    display: flex;
    list-style: none;
    padding: 0;
    background-color: rgb(var(--color-light-grey));

    & > li {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem 1rem;
      font-size: .6875rem;

      @media (max-width:340px){
        font-size: 0.25rem;
        padding: 0.3rem 0.45rem;
      }
      @media (max-width:28.125em) and (min-width: 341px){
        font-size: 0.3rem ; 
        padding: 0.39rem 0.5rem;
      }
      @media (max-width:43.75em) and (min-width: 28.1875em){
        font-size: 0.45rem;
        padding: 0.4rem 0.67rem;
      }

      &:not(:last-child) {
        border-right: .0625rem solid rgb(var(--color-black));
      }

      &:last-child {
        width: 2.5rem;

        @media (max-width: 28.125em) {
          width: 1.8rem;
        }
      }
    }
  }
`;
