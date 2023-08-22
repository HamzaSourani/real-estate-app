import RoomsAndFloorDetailsStep from "../steps/roomsAndFloorDetails";
import AreaInSquareFeetStep from "../steps/areaInSquareFeet";
import RatingAndDateStep from "../steps/ratingAndDate";
import LocationAndDirectionsStep from "../steps/locationAndDirections";
import PriceStep from "../steps/price";
import InfoStep from "../steps/info";
import { Steps } from "../type";
import { Props } from "./type";

const AddPropertyStepperContent = ({ activeStep }: Props) => {
  switch (activeStep) {
    case Steps.INFO:
      return <InfoStep />;
    case Steps.ROOMS_AND_FLOOR_DETAILS:
      return <RoomsAndFloorDetailsStep />;
    case Steps.AREA_IN_SQUARE_FEET:
      return <AreaInSquareFeetStep />;
    case Steps.RATING_AND_DATE:
      return <RatingAndDateStep />;
    case Steps.LOCATION_AND_DIRECTIONS:
      return <LocationAndDirectionsStep />;
    case Steps.PRICE:
      return <PriceStep />;
  }
};

export default AddPropertyStepperContent;
