import React from "react";
import { CommonContainer } from "../styled/commonStyles";

function Navbar({ children, d, jc, nav, bs }) {
  return (
    <CommonContainer
      d={d}
      jc={jc}
      area={nav}
      bs={bs}
      ai="center"
      height="9.36vh"
      width="100vw"
    >
      {children}
    </CommonContainer>
  );
}

export default Navbar;
