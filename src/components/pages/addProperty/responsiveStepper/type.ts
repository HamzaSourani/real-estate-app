import { Dispatch, SetStateAction } from "react";

export interface Props {
  activeStep: Steps;
  setActiveStep: Dispatch<SetStateAction<number>>;
  isLoading: boolean;
}
export enum Steps {
  INFO,
  ROOMS_AND_FLOOR_DETAILS,
  AREA_IN_SQUARE_FEET,
  RATING_AND_DATE,
  LOCATION_AND_DIRECTIONS,
  PRICE,
}
