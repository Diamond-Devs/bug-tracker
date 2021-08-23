import React from "react";
import styled from "styled-components";

const NavbarDiv = styled.div`
  grid-area: ${({ area }) => area};
  display: flex;
  align-items: center;
  background: #fffdfd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: ${({ width }) => width};
  height: 9.4vh;
  justify-content: space-around;
  margin-left: ${({ ml }) => ml};
`;

function Navbar({ icons, area, width, ml }) {
  return (
    <NavbarDiv area={area} width={width} ml={ml}>
      {icons.map((icon) => icon)}
    </NavbarDiv>
  );
}

export default Navbar;
