import InfoIcon from "@mui/icons-material/Info";
import RoomsIcon from "@mui/icons-material/Weekend";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import RateIcon from "@mui/icons-material/Grade";
import LocationIcon from "@mui/icons-material/LocationOn";
import PriceIcon from "@mui/icons-material/MonetizationOn";
const STEPS = [
  { label: "pages.add-edit-property.steps.info", icon: InfoIcon },
  {
    label: "pages.add-edit-property.steps.rooms-and-floor-details",
    icon: RoomsIcon,
  },
  {
    label: "pages.add-edit-property.steps.areas-in-square-feet",
    icon: SquareFootIcon,
  },
  { label: "pages.add-edit-property.steps.rating-and-date", icon: RateIcon },
  {
    label: "pages.add-edit-property.steps.location-and-directions",
    icon: LocationIcon,
  },
  { label: "pages.add-edit-property.steps.price", icon: PriceIcon },
];
const RATES = {
  VERY_POOR: "very-poor",
  POOR: "poor",
  GOOD: "good",
  VERY_GOOD: "very-good",
  EXCELLENT: "excellent",
};
const PROPERTY_TYPE = {
  house: 1,
  villa: 2,
  chalet: 3,
} as const;
export { STEPS, PROPERTY_TYPE, RATES };
