import styled from 'styled-components';

const NoDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 65vh;
  text-align: center;
`;

const Circle = styled.div`
  width: 23.125rem;
  height: 23.125rem;
  border: 1.25rem solid rgb(var(--color-light-grey));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const NoDataText = styled.p`
  font-size: 2.9rem;
  font-weight: 600;
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
