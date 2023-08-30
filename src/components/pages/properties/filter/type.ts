import { PropertiesResponse } from "@/api/property/type";
import { Sort } from "@/pages/properties/type";
import { AutocompleteObject } from "@/type";
import {
  InfiniteData,
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

export interface Props {
  name: string;
  address: string;
  bedrooms: number | null;
  bathrooms: number | null;
  kitchens: number | null;
  floors: number | null;
  floorsLevel: number | null;
  north: boolean | null;
  south: boolean | null;
  east: boolean | null;
  west: boolean | null;
  city: AutocompleteObject | null;
  region: AutocompleteObject | null;
  priceMin: number | null;
  priceMax: number | null;
  sqftLivingMin: number | null;
  sqftLivingMax: number | null;
  setName: Dispatch<SetStateAction<string>>;
  setAddress: Dispatch<SetStateAction<string>>;
  setBedrooms: Dispatch<SetStateAction<number | null>>;
  setBathrooms: Dispatch<SetStateAction<number | null>>;
  setKitchens: Dispatch<SetStateAction<number | null>>;
  setFloors: Dispatch<SetStateAction<number | null>>;
  setFloorsLevel: Dispatch<SetStateAction<number | null>>;
  setNorth: Dispatch<SetStateAction<boolean | null>>;
  setSouth: Dispatch<SetStateAction<boolean | null>>;
  setEast: Dispatch<SetStateAction<boolean | null>>;
  setWest: Dispatch<SetStateAction<boolean | null>>;
  setCity: Dispatch<SetStateAction<AutocompleteObject | null>>;
  setRegion: Dispatch<SetStateAction<AutocompleteObject | null>>;
  setPriceMin: Dispatch<SetStateAction<number | null>>;
  setPriceMax: Dispatch<SetStateAction<number | null>>;
  setSqftLivingMin: Dispatch<SetStateAction<number | null>>;
  setSqftLivingMax: Dispatch<SetStateAction<number | null>>;
  setSort: Dispatch<SetStateAction<Sort>>;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<
    QueryObserverResult<
      InfiniteData<{
        data: PropertiesResponse;
        pageParam: any;
      }>,
      unknown
    >
  >;
}
