import React from "react";
import styled from "styled-components";

const NavbarDiv = styled.div`
  grid-area: nav;
  display: flex;
  align-items: center;
  background: #fffdfd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100vw;
  height: 9.4vh;
  justify-content: space-around;
`;

function Navbar({ icons }) {
  return <NavbarDiv>{icons.map((icon) => icon)}</NavbarDiv>;
}

export default Navbar;
