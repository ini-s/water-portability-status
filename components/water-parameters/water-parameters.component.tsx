import React from "react";
import Image from "next/image";
import dayjs from "dayjs";

import {
  WaterParametersContainer,
  CombinedContainer,
} from "../../styles/water-parameters.styles";
import { IWaterData } from "../../types/data-types";

interface IWaterParameterProps {
  waterQualityData: IWaterData[];
}

const WaterParameters: React.FC<IWaterParameterProps> = ({
  waterQualityData,
}) => {
  return (
    <CombinedContainer>
      <h2>WATER PARAMETERS</h2>
      <WaterParametersContainer>
        <table>
          <thead>
            <tr>
              <th>DATE/TIME</th>
              <th>
                TEMP
                <br />
                (°C)
              </th>
              <th>
                TDS
                <br />
                (ppm)
              </th>
              <th>
                SALINITY
                <br />
                (ppm)
              </th>
              <th>
                EC
                <br />
                (uS/cm)
              </th>
              <th>SG</th>
              <th>pH</th>
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
        </table>
      </WaterParametersContainer>
    </CombinedContainer>
  );
};

export default WaterParameters;
