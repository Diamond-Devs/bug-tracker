import React from "react";
import { CommonContainer, Image } from "../styled/commonStyles";

function Icon({ height, width, src, alt, d, ai, jc, t, ml, mr, mt, mw }) {
  return (
    <CommonContainer
      height={height}
      width={width}
      d={d}
      ai={ai}
      jc={jc}
      t={t}
      ml={ml}
      mr={mr}
      mw={mw}
      mt={mt}
    >
      <Image height={height} width={width} src={src} alt={alt} mw={mw}></Image>
    </CommonContainer>
  );
}

export default Icon;
