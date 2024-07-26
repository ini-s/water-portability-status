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
        <h1>This Water is </h1>
        <p>{!isSafe ? " Unsafe for Use" : " Safe for Use"}</p>
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
