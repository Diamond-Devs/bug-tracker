import React from "react";
import styled from "styled-components";

const IconDiv = styled.div`
  margin-right: ${({ mr }) => mr};
  margin-left: ${({ ml }) => ml};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background: yellow;
`;

const IconImg = styled.img`
  object-fit: contain;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

function Icon({ src, alt, mr, ml, children, height, width }) {
  return (
    <IconDiv mr={mr} ml={ml} height={height} width={width}>
      {children}
      <IconImg src={src} alt={alt} height={height} width={width} />
    </IconDiv>
  );
}

export default Icon;
