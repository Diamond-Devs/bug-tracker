import React from "react";
import { CommonContainer, Text } from "../styled/commonStyles";
import Icon from "./Icon";

function Row({ src, text, fs, onClick, cursorP, invert }) {
  return (
    <CommonContainer
      d="flex"
      fd="row"
      height="16vh"
      ai="center"
      onClick={onClick && onClick}
      cursorP={cursorP}
      invert={invert}
    >
      <Icon ml="8vw" width="10vw" mw={"36px"} height="36px" src={src} />
      <CommonContainer ml={"13px"} d="flex" ai="center">
        <Text fs={fs}>{text}</Text>
      </CommonContainer>
    </CommonContainer>
  );
}

export default Row;
