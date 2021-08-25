import React from "react";
import { CommonContainer } from "../styled/commonStyles";

//Icons
import Search from "../assets/SearchIcon.png";
import CancelIcon from "../assets/CancelIcon.png";

//Components
import Icon from "../components/Icon";
import { Input } from "../styled/commonStyles";

function SearchBar({ width }) {
  return (
    <CommonContainer
      br="20px"
      b="1px solid #454E9E"
      d="flex"
      align-items="center"
      height="36px"
    >
      <Icon
        width="5vw"
        d="flex"
        ml="12px"
        mr="8px"
        mw="16px"
        src={Search}
      ></Icon>
      <Input width="30vw" mw="250px" pd="4px" />
      <Icon
        width="3vw"
        d="flex"
        mr="12px"
        ml="8px"
        mw="12px"
        src={CancelIcon}
      ></Icon>
    </CommonContainer>
  );
}

export default SearchBar;
