import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(1.7px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: rgb(var(--color-light-blue));
  padding: 20px;
  border-radius: 50px;
  width: 537px;
  height:295px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: 700;
  }
`;

export const DataRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-bottom: 20px;
`;

export const DataItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 6px;
`;

export const Label = styled.div`
  font-size: 16px;
`;

export const Value = styled.div`
  font-size: 14px;
  background-color: rgb(var(--color-light-grey));
  border: 1px solid rgb(var(--color-black));
  height: 23px;
  width: 120px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
`;

export const CloseButton = styled.button`
  background-color:rgb(var(--color-dark-blue));
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: auto;
  font-size: 14.34px;
  font-weight: 800;
`;