import styled from "styled-components";

export const NotificationsContainer = styled.div``;

export const Table = styled.table``;

export const FilterBox = styled.div`
  & > input {
    border: 1px solid rgb(var(--color-black));
    border-radius: 5px;

    // ::-webkit-datetime-edit-hour-field
    // ::-webkit-datetime-edit-minute-field
    // ::-webkit-datetime-edit-second-field
    // ::-webkit-datetime-edit-millisecond-field
    // ::-webkit-datetime-edit-ampm-field

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
`;

export const SearchBox = styled.div``;

export const PaginationBox = styled.div`
  & > ul {
    display: flex;
    background-color: rgb(var(--color-light-grey));
    border-left: 1px rgb(var(--color-black));
    margin-left: 1rem;
    max-width: 9.94rem;
    height: 1.75rem;

    & > li {
      display: flex;
      justify-content: center;
      align-items: center;

      &:not(:last-child) {
        border-right: 1px solid rgb(var(--color-black));
        padding: 0.5rem 0.5rem;
      }

      &:last-child {
        width: 6rem;
        padding: 2px 2px;
      }
    }
  }
`;
