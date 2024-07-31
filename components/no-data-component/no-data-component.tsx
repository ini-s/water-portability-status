import styled from "styled-components";

const NoDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 65vh;
  text-align: center;
  margin-top: 2.1875rem;
`;

const Circle = styled.div`
  width: 22rem;
  height: 22rem;
  border: 1.25rem solid rgb(var(--color-light-grey));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 31.3125em) {
    width: 13rem;
    height: 13rem;
    border: 0.9rem solid rgb(var(--color-light-grey));
  }
  @media (max-width: 43.75em) and (min-width: 31.25em) {
    width: 16rem;
    height: 16rem;
    border: 1rem solid rgb(var(--color-light-grey));
  }
`;

const NoDataText = styled.p`
  font-size: 2.8rem;
  font-weight: 600;

  @media (max-width: 31.25em) {
    font-size: 1.7rem;
  }

  @media (max-width: 43.75em) and (min-width: 31.3125em) {
    font-size: 2rem;
  }
`;

const NoDataComponent = () => {
  return (
    <NoDataWrapper>
      <Circle>
        <NoDataText>No Data Recorded</NoDataText>
      </Circle>
    </NoDataWrapper>
  );
};

export default NoDataComponent;
