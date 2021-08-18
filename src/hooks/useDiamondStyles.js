import { useState } from "react";
export const useDiamondStyles = ({ size, br, mb, ds, ts }) => {
  const bind = {
    size,
    br,
    mb,
    ds,
    ts,
  };

  return bind;
};
