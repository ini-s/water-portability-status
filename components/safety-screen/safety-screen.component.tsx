import Image from "next/image";
import React from "react";

import {
  ImageContainer,
  SafeScreenContainer,
  TextContainer,
} from "../../styles/safety-screen.styles";

import SafeImage from "../../public/images/greenthumbs.png";
import UnsafeImage from "../../public/images/redthumbs.png";

const SafetyScreen = ({ isSafe }: { isSafe: boolean }) => {
  return (
    <SafeScreenContainer>
      <TextContainer>
        <h1>This Water is </h1>
        <p>{!isSafe ? " Unsafe for Use" : " Safe for Use"}</p>
      </TextContainer>

      <ImageContainer>
        <Image
          src={!isSafe ? UnsafeImage : SafeImage}
          width={200}
          height={207}
          alt={!isSafe ? "thumbs-up-icon" : "thumbs-down-icon"}
          placeholder="blur"
          priority
        />
      </ImageContainer>
    </SafeScreenContainer>
  );
};

export default SafetyScreen;
