import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import RegularText from "./RegularText";
import RegularInput from "./RegularInput";
import Button from "./Button";

const LoginUI = styled.div`
  width: 71vw;
  height: 81.24vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function LoginContainer({ addStyles }) {
  return (
    <LoginUI>
      <Logo width={24.4} height={20.6} mb={addStyles.mb} />
      <RegularText size={1.75} mb={addStyles.mb} ds={addStyles.ds} ts>
        Diamond Devs Bug Tracker
      </RegularText>
      <RegularInput
        br={addStyles.br}
        mb={addStyles.mb}
        ds={addStyles.ds}
        placeholder="Username"
      />
      <RegularInput
        br={addStyles.br}
        mb={addStyles.mb}
        ds={addStyles.ds}
        placeholder="Password"
      />
      <Button br={addStyles.br} mb={addStyles.mb} ds={addStyles.ds} invert>
        Log In
      </Button>
      <Button br={addStyles.br} mb={addStyles.mb} ds={addStyles.ds}>
        Sign Up
      </Button>
    </LoginUI>
  );
}

export default LoginContainer;
