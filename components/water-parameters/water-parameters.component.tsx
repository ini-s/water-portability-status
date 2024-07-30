import React from "react";
import Image from "next/image";
import dayjs from "dayjs";

import {
  Table,
  WaterParametersContainer,
} from "../../styles/water-parameters.styles";

import { IWaterData } from "../../types/data-types";

import SafeImage from "../../public/images/safe.png";
import UnSafeImage from "../../public/images/unsafe.png";
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
                        src={UnSafeImage}
                        alt="Unsafe-img"
                        width={20}
                        height={20}
                        placeholder="blur"
                      />
                    ) : (
                      <Image
                        src={SafeImage}
                        alt="Safe-img"
                        width={20}
                        height={20}
                        placeholder="blur"
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
