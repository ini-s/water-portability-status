import { ImageContainer, SafeScreenContainer, TextContainer } from "../../styles/safety-screen.styles";

import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";

const SafetyScreen: React.FC = () => {
  const [isUnsafe, setIsUnsafe] = useState(true);

  return (
    <SafeScreenContainer>
      
        <TextContainer>
          <h2>This Water is </h2>
          <h1>{isUnsafe ? " Unsafe for Use" : " Safe for Use"}</h1>
        </TextContainer>

        <ImageContainer>
          <Image
          src={isUnsafe ? "/images/redthumbs.png" : "/images/greenthumbs.png"}
          width={200}
          height={207}
          alt={isUnsafe ? "" : ""}
          />
        </ImageContainer>
      
    </SafeScreenContainer>
  );
};

export default SafetyScreen;
