import React from "react";
import styled from "styled-components";

import Cancel from "../assets/CancelIcon.png";
import Search from "../assets/SearchIcon.png";

import Input from "./Input";
import Icon from "./Icon";
import { useDiamondStyles } from "../hooks/useDiamondStyles";
const InputText = styled.input`
  width: 28.75vw;
  height: 5.6vh;
  outline: none;
  border: none;
  color: #454e9e;
  margin-right: ${({ mr }) => mr};
  margin-left: ${({ ml }) => ml};
  @media (min-width: 609px) {
    margin-left: ${({ ml }) => ml * 0.5};
    margin-right: ${({ mr }) => mr * 0.5};
  }
`;

const SearchIcon = styled(Icon)``;

function SearchBar({ ml, mr }) {
  return (
    <Input ml={ml} mr={mr}>
      <SearchIcon src={Search} {...useDiamondStyles({ ml: 1.8 })} />
      <InputText />
      <SearchIcon src={Cancel} {...useDiamondStyles({ mr: 1.8 })} />
    </Input>
  );
}

export default SearchBar;
