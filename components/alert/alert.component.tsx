import React, { useState } from "react";

import { AlertContainer } from "../../styles/alert.styles";

const Alert = () => {
  const [isUnsafe, setIsUnsafe] = useState(true);
  return (
    <AlertContainer>
      <p>Report at 21/06/2024 09:00</p>
      <h1>ALERT</h1>
      <p>
        {isUnsafe ? (
          <>
            pH is not within acceptable range
            <br />
            Temperature is not within acceptable range
            <br />
            Specific Gravity is not within acceptable range
            <br />
            Total Dissolved Solids is not within acceptable range
            <br />
            Salinity is not within acceptable range
            <br />
            Electrical Conductivity is not within acceptable range
          </>
        ) : (
          <>
            pH is within acceptable range
            <br />
            Temperature is within acceptable range
            <br />
            Specific Gravity is within acceptable range
            <br />
            Total Dissolved Solids is within acceptable range
            <br />
            Salinity is within acceptable range
            <br />
            Electrical Conductivity is within acceptable range
          </>
        )}
      </p>
      <button>Get Real-time Data</button>
    </AlertContainer>
  );
};

export default Alert;
