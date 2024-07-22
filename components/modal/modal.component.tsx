import React from 'react';
import { IWaterData } from '../../types/data-types';
import { ModalOverlay, ModalContainer, ModalContent, CloseButton, DataRow, DataItem, Label, Value } from '../../styles/modal.styles';

interface IModalComponentProps {
  isOpen: boolean;
  onRequestClose: () => void;
  waterQualityData: IWaterData[];
}

const ModalComponent: React.FC<IModalComponentProps> = ({
  isOpen,
  onRequestClose,
  waterQualityData,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalContent>
          <h2>DATA POTABILITY</h2>
          {waterQualityData.map((data, index) => (
            <DataRow key={index}>
              <DataItem>
                <Label>TEMPERATURE</Label>
                <Value>{data.temperature}</Value>
              </DataItem>
              <DataItem>
                <Label>TOTAL DISSOLVED SOLIDS</Label>
                <Value>{data.total_dissolved_solids}</Value>
              </DataItem>
              <DataItem>
                <Label>SALINITY</Label>
                <Value>{data.salinity}</Value>
              </DataItem>
              <DataItem>
                <Label>EC</Label>
                <Value>{data.electrical_conductivity}</Value>
              </DataItem>
              <DataItem>
                <Label>SG</Label>
                <Value>{data.specific_gravity}</Value>
              </DataItem>
              <DataItem>
                <Label>pH</Label>
                <Value>{data.ph}</Value>
              </DataItem>
            </DataRow>
          ))}
          <CloseButton onClick={onRequestClose}>OK</CloseButton>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalComponent;