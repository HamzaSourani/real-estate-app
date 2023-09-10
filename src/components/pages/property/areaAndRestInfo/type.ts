import { AutocompleteObject } from "@/type";

export interface Props {
  floors: number;
  floor_level: number;
  sqft_living: number;
  sqft_living_15: number;
  sqft_lot: number;
  sqft_lot_15: number;
  sqft_above: number;
  sqft_basement: number;
  water_front: number;
  features: AutocompleteObject[];
}
