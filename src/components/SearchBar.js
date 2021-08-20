import React from "react";
import styled from "styled-components";

import Cancel from "../assets/CancelIcon.png";
import Search from "../assets/SearchIcon.png";

import Input from "./Input";
import Icon from "./Icon";
const InputText = styled.input`
  width: 28.75vw;
  height: 5.6vh;
  outline: none;
  border: none;
  color: #454e9e;
`;

const SearchIcon = styled(Icon)``;

function SearchBar() {
  return (
    <Input ml={3}>
      <SearchIcon src={Search} ml={3} />
      <InputText />
      <SearchIcon src={Cancel} mr={3} />
    </Input>
  );
}

export default SearchBar;
