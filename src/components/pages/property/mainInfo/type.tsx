import { AutocompleteObject } from "@/type";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ReactNode } from "react";

export interface Props {
  bed_rooms: number;
  bath_room: number;
  kitchens: number;
  address: string;
  detail: string;
  price: number;
  yr_built: string;
  yr_renovated: string;
  furnish: AutocompleteObject;
  region: AutocompleteObject;
  type: AutocompleteObject;
  city: AutocompleteObject;
}
export interface KeyValueProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  label: string;
  value: string | number;
}
