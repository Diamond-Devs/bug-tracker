import React from "react";
import { CommonContainer, mainWhite } from "../styled/commonStyles";

function SideMenu({ children }) {
  return (
    <CommonContainer
      width="100vw"
      height="84vh"
      area="body"
      d="flex"
      fd="column"
      mt="0.24vw"
      bc={mainWhite}
      bs="0px 4px 4px rgba(0, 0, 0, 0.25)"
      z={2}
    >
      {children}
    </CommonContainer>
  );
}

export default SideMenu;
