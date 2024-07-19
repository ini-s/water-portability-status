import React from "react";
import {
  WaterParametersContainer,
  CombinedContainer,
} from "../../styles/water-parameters.styles";
import Image from "next/image";

interface IWaterParameter {
  dateTime: string;
  temperature: number;
  tds: number;
  salinity: number;
  ec: number;
  sg: number;
  ph: number;
  status: string;
}

const waterParameters: IWaterParameter[] = [
  {
    dateTime: "2024-07-01 12:00",
    temperature: 25.5,
    tds: 300,
    salinity: 35,
    ec: 15,
    sg: 1.025,
    ph: 7.8,
    status: "unsafe",
  },
  {
    dateTime: "2024-07-02 12:00",
    temperature: 26.0,
    tds: 310,
    salinity: 34,
    ec: 12,
    sg: 1.024,
    ph: 7.9,
    status: "safe",
  },
  {
    dateTime: "2024-07-03 12:00",
    temperature: 28.5,
    tds: 350,
    salinity: 35,
    ec: 14,
    sg: 1.025,
    ph: 7.8,
    status: "unsafe",
  },
  {
    dateTime: "2024-07-04 12:00",
    temperature: 27.5,
    tds: 320,
    salinity: 40,
    ec: 20,
    sg: 1.005,
    ph: 8,
    status: "unsafe",
  },
  {
    dateTime: "2024-07-05 12:00",
    temperature: 25.5,
    tds: 330,
    salinity: 38,
    ec: 10,
    sg: 1.105,
    ph: 7.9,
    status: "safe",
  },
];

const WaterParameters: React.FC = () => {
  return (
    <CombinedContainer>
      <h2>WATER PARAMETERS</h2>
      <WaterParametersContainer>
        <table>
          <thead>
            <tr>
              <th>DATE/TIME</th>
              <th>TEMP<br/>(°C)</th>
              <th>TDS<br/>(ppm)</th>
              <th>SALINITY<br/>(ppm)</th>
              <th>EC<br/>(uS/cm)</th>
              <th>SG</th>
              <th>pH</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {waterParameters.map((param, index) => (
              <tr key={index}>
                <td>{param.dateTime}</td>
                <td>{param.temperature}</td>
                <td>{param.tds}</td>
                <td>{param.salinity}</td>
                <td>{param.ec}</td>
                <td>{param.sg}</td>
                <td>{param.ph}</td>
                <td>
                  {param.status === "unsafe" ? (
                    <Image src="/images/unsafe.png" alt="Unsafe" width={20} height={20} />
                  ) : (
                    <Image src="/images/safe.png" alt="Safe" width={20} height={20} />
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
