import React from "react";
import styled from "styled-components";
import { CommonContainer } from "../styled/commonStyles";

const DiamondInput = styled.input`
  width: 80vw;
  height: 7.5vh;
  border-radius: ${({ br }) => br};
  border: 1px solid #454e9e;
  color: #454e9e;
  padding-left: 10px;
  outline: none;
  font-size: 1em;
  font-family: "Gothic A1", sans-serif;
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #454e9e;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: #454e9e;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: #454e9e;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: #454e9e;
  }
`;

function RegularInput({ mb, br, ds, placeholder, value, onChange }) {
  return (
    <CommonContainer mb={mb} ds={ds} mb={mb}>
      <DiamondInput
        br={br}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </CommonContainer>
  );
}

export default RegularInput;
