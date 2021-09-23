import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import axios from "axios";
import RegularText from "../components/RegularText";
import RegularInput from "../components/RegularInput";
import Button from "../components/Button";
import { useDiamondStyles } from "../hooks/useDiamondStyles";
import { useHistory } from "react-router-dom";

const LoginView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginOrSignUp = styled.div`
  width: 71vw;
  height: 81.24vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function Login({ addStyles }) {
  const history = useHistory();
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const titleStyle = useDiamondStyles({
    size: "1.75em",
    mb: addStyles.mb,
    ds: addStyles.ds,
    ts: true,
  });
  const defaultStyle = useDiamondStyles({
    mb: addStyles.mb,
    ds: addStyles.ds,
    br: addStyles.br,
  });

  const logoDefault = useDiamondStyles({
    width: 54.4,
    height: 20.6,
  });
  const logoSignUp = useDiamondStyles({
    width: 54.4,
    height: 26.6,
  });

  const requestAuthentication = async () => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_DOMAINTWO + "/login-route",
        { name, password }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    // history.push("/dashboard")
  };

  return (
    <LoginView>
      <LoginOrSignUp>
        {isSignUp || (
          <>
            <Logo {...logoDefault} mb={addStyles.mb} />
            <RegularText {...titleStyle}>
              Diamond Delivery Issue Tracker
            </RegularText>
            <RegularInput
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                console.log(name);
              }}
              {...defaultStyle}
              placeholder="Username"
            />
            <RegularInput
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                console.log(password);
              }}
              {...defaultStyle}
              placeholder="Password"
            />
            <Button
              {...defaultStyle}
              invert
              onClick={() => {
                requestAuthentication();
              }}
            >
              Log In
            </Button>
            <Button {...defaultStyle} onClick={() => setIsSignUp(true)}>
              Sign Up
            </Button>
          </>
        )}
        {isSignUp && (
          <>
            <Logo {...logoSignUp} mb={addStyles.mb} />
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
    </LoginView>
  );
}

export default Login;
