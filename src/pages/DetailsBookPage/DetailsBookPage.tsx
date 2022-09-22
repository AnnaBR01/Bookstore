import React from "react";
import { DetailsBook } from "../../components";
import { Slider } from "../../components/atoms/Slider/Slider";

import { StyledDetailsBookPage } from "./styles";

export const DetailsBookPage = () => {
  return (
    <StyledDetailsBookPage>
      <DetailsBook />
      {/* Subscribe */}
      <Slider />
    </StyledDetailsBookPage>
  );
};
