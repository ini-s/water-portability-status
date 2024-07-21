import styled from "styled-components";

export const NotificationsContainer = styled.div`
  width: 100%;
  padding: 2rem;

  & > h1 {
    text-transform: uppercase;
    text-align: center;
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 3.75rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th,
  td {
    padding: 0.5rem;
    text-align: left;
    font-size: 0.6875rem;
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

export const FilterBox = styled.form`
  margin-bottom: 1rem;

  & > p {
    color: rgb(var(--color-red));
  }

  & > div {
    display: flex;
    align-items: center;

    & > input {
      border: 1px solid rgb(var(--color-black));
      border-radius: 5px;
      padding: 0.5rem;

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
    }
  }
`;

export const InputContainer = styled.div``;

export const SearchBox = styled.div`
  margin-left: auto;
`;

export const PaginationBox = styled.div`
  display: flex;
  justify-content: end;

  & > ul {
    display: flex;
    list-style: none;
    padding: 0;
    background-color: rgb(var(--color-light-grey));
    border-left: 0.0625rem solid rgb(var(--color-black));

    & > li {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem 1rem;
      border-left: 1px rgb(var(--color-black));

      &:not(:last-child) {
        border-right: 1px solid rgb(var(--color-black));
      }

      &:last-child {
        width: 3rem;
        padding: 2px 2px;
      }
    }
  }
`;
