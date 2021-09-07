import React from "react";
import { CommonContainer } from "../styled/commonStyles";
import Icon from "./Icon";

function Toggle({ hide, show, toggled, setToggled }) {
  return (
    <CommonContainer onClick={() => setToggled(!toggled)}>
      {toggled ? hide : show}
    </CommonContainer>
  );
}

export default Toggle;
