import { Dispatch, SetStateAction } from "react";
import { Sort } from "@/pages/properties/type";

export interface Props {
  setSort: Dispatch<SetStateAction<Sort>>;
}
