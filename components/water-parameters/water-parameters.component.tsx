import React from "react";
import Image from "next/image";
import dayjs from "dayjs";

import {
  Table,
  WaterParametersContainer,
} from "../../styles/water-parameters.styles";

import { IWaterData } from "../../types/data-types";

interface IWaterParameterProps {
  waterQualityData: IWaterData[];
}

const WaterParameters: React.FC<IWaterParameterProps> = ({
  waterQualityData,
}) => {
  return (
    <WaterParametersContainer>
      <p>WATER PARAMETERS</p>
      <div>
        <Table>
          <thead>
            <tr>
              <th>DATE/TIME</th>
              <th>TEMP (°C)</th>
              <th>TDS (ppm)</th>
              <th>SALINITY (ppm)</th>
              <th>EC (uS/cm)</th>
              <th>SG</th>
              <th>pH</th>
              <th>PREDICTED pH</th>
              <th>PREDICTED TEMP (°C)</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {waterQualityData
              ?.slice()
              .reverse()
              .map((data, index) => (
                <tr key={index}>
                  <td>{dayjs(data.created_at).format("MM/DD/YYYY HH:mm")}</td>
                  <td>{data.temperature}</td>
                  <td>{data.total_dissolved_solids}</td>
                  <td>{data.salinity}</td>
                  <td>{data.electrical_conductivity}</td>
                  <td>{data.specific_gravity}</td>
                  <td>{data.ph}</td>
                  <td>{data.prediction_log.ph}</td>
                  <td>{data.prediction_log.temperature}</td>
                  <td>
                    {!data.prediction_log.potability ? (
                      <Image
                        src="/images/unsafe.png"
                        alt="Unsafe-img"
                        width={20}
                        height={20}
                      />
                    ) : (
                      <Image
                        src="/images/safe.png"
                        alt="Safe-img"
                        width={20}
                        height={20}
                      />
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </WaterParametersContainer>
  );
};

export default WaterParameters;
