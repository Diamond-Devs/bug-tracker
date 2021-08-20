import React from "react";
import styled from "styled-components";

const NavbarDiv = styled.div`
  grid-area: nav;
  background: #fffdfd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100vw;
  height: 9.4vh;
`;

function Navbar() {
  return <NavbarDiv></NavbarDiv>;
}

export default Navbar;
