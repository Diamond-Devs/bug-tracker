import { css } from "styled-components";

export const generateResponsiveness = (
  values,
  attribute,
  jumpValue,
  firstJumpMin
) => {
  console.log(values);
  if (!Array.isArray(values)) return;
  const responsiveFs = values?.map((value, index) => {
    if (index == 0)
      return css`
        ${attribute}: ${values[index]};
      `;
    const multiplied = jumpValue * (index + 1);

    if (multiplied > firstJumpMin) {
      return css`
        @media (min-width: ${multiplied}px) {
          ${attribute}: ${values[index]};
        }
      `;
    }
  });
  return responsiveFs;
};
