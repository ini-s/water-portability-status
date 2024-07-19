import {
  ImageContainer,
  SafeScreenContainer,
  TextContainer,
} from "../../styles/safety-screen.styles";

import Image from "next/image";
import React from "react";

const SafetyScreen = ({ isSafe }: { isSafe: boolean }) => {
  return (
    <SafeScreenContainer>
      <TextContainer>
        <h2>This Water is </h2>
        <h1>{!isSafe ? " Unsafe for Use" : " Safe for Use"}</h1>
      </TextContainer>

      <ImageContainer>
        <Image
          src={!isSafe ? "/images/redthumbs.png" : "/images/greenthumbs.png"}
          width={200}
          height={207}
          alt={!isSafe ? "thumbs-up-icon" : "thumbs-down-icon"}
          priority
        />
      </ImageContainer>
    </SafeScreenContainer>
  );
};

export default SafetyScreen;
