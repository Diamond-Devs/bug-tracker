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
  margin-right: ${({ mr }) => mr}vw;
  margin-left: ${({ ml }) => ml}vw;
  @media (min-width: 609px) {
    margin-left: ${({ ml }) => ml * 0.5}vh;
    margin-right: ${({ mr }) => mr * 0.5}vh;
  }
`;

const SearchIcon = styled(Icon)``;

function SearchBar({ ml, mr }) {
  return (
    <Input ml={ml} mr={mr}>
      <SearchIcon src={Search} ml={3} />
      <InputText />
      <SearchIcon src={Cancel} mr={3} />
    </Input>
  );
}

export default SearchBar;
