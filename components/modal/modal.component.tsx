import React, { useRef, useEffect } from "react";

import { IWaterData } from "../../types/data-types";

import {
  ModalOverlay,
  ModalContainer,
  ModalContent,
  CloseButton,
  DataRow,
  DataItem,
  Label,
  Value,
} from "../../styles/modal.styles";

import Spinner from "../spinner-component/spinner-component";

interface IModalComponentProps {
  isOpen: boolean;
  onRequestClose: () => void;
  waterQualityData: IWaterData[];
  isLoading: boolean;
}

const ModalComponent: React.FC<IModalComponentProps> = ({
  isOpen,
  onRequestClose,
  waterQualityData,
  isLoading,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onRequestClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onRequestClose]);

  if (!isOpen) {
    return null;
  }

 
  return (
    <ModalOverlay>
      <ModalContainer ref={modalRef}>
        <ModalContent>
          <h2>DATA POTABILITY</h2>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
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
            </>
          )}
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalComponent;