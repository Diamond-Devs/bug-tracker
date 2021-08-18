import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import RegularText from "./RegularText";
import RegularInput from "./RegularInput";
import Button from "./Button";
import { useDiamondStyles } from "../hooks/useDiamondStyles";

const LoginOrSignUp = styled.div`
  width: 71vw;
  height: 81.24vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function Login({ addStyles }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const titleStyle = useDiamondStyles({
    size: 1.75,
    mb: addStyles.mb,
    ds: addStyles.ds,
    ts: true,
  });
  const defaultStyle = useDiamondStyles({
    mb: addStyles.mb,
    ds: addStyles.ds,
    br: addStyles.br,
  });
  return (
    <LoginOrSignUp>
      {isSignUp || (
        <>
          <Logo width={24.4} height={20.6} mb={addStyles.mb} />
          <RegularText {...titleStyle}>
            Diamond Delivery Issue Tracker
          </RegularText>
          <RegularInput {...defaultStyle} placeholder="Username" />
          <RegularInput {...defaultStyle} placeholder="Password" />
          <Button {...defaultStyle} invert>
            Log In
          </Button>
          <Button {...defaultStyle} onClick={() => setIsSignUp(true)}>
            Sign Up
          </Button>
        </>
      )}
      {isSignUp && (
        <>
          <Logo width={30.4} height={26.6} mb={addStyles.mb} />
          <RegularInput {...defaultStyle} placeholder="Create username" />
          <RegularInput {...defaultStyle} placeholder="Create Password" />
          <Button {...defaultStyle} invert>
            Create Account
          </Button>
          <Button {...defaultStyle} onClick={() => setIsSignUp(false)}>
            Already have an account?
          </Button>
        </>
      )}
    </LoginOrSignUp>
  );
}

export default Login;
