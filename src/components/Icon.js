import React from "react";
import { CommonContainer, Image } from "../styled/commonStyles";

function Icon({ height, width, src, alt }) {
  return (
    <CommonContainer height={height} width={width} bc="orange">
      <Image height={height} width={width} src={src} alt={alt}></Image>
    </CommonContainer>
  );
}

export default Icon;
