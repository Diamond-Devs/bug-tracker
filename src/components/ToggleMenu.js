import React, { useState } from "react";
import Icon from "./Icon";

function ToggleMenu({ hide, show }) {
  const [toggled, setToggled] = useState(false);
  return (
    <div onClick={() => setToggled(!toggled)}>
      {toggled ? (
        <Icon src={hide[0]} alt={hide[1]} mr={3} />
      ) : (
        <Icon src={show[0]} alt={show[1]} mr={3} />
      )}
    </div>
  );
}

export default ToggleMenu;
