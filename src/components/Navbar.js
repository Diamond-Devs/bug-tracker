import React from "react";
import { CommonContainer } from "../styled/commonStyles";

function Navbar({ children, d, jc }) {
  return (
    <CommonContainer
      d={d}
      jc={jc}
      area="nav"
      bc="red"
      ai="center"
      height="9.36vh"
      width="inherit"
      align-items="center"
    >
      {children}
    </CommonContainer>
  );
}

export default Navbar;
