import { useState } from "react";
import { useParams } from "react-router-dom";
import { PropertiesParams, Sort } from "./type";
import { PROPERTY_TYPE } from "@/constants/property";
import Filter from "@/components/pages/properties/filter";
import { useGetPropertiesQuery } from "@/api/property/queries";

const Properties = () => {
  const [page, setPage] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [bedrooms, setBedrooms] = useState<number | null>(null);
  const [bathrooms, setBathrooms] = useState<number | null>(null);
  const [kitchens, setKitchens] = useState<number | null>(null);
  const [floors, setFloors] = useState<number | null>(null);
  const [floorsLevel, setFloorsLevel] = useState<number | null>(null);
  const [north, setNorth] = useState<boolean | null>(null);
  const [south, setSouth] = useState<boolean | null>(null);
  const [east, setEast] = useState<boolean | null>(null);
  const [west, setWest] = useState<boolean | null>(null);
  const [cityId, setCityId] = useState<string | null>(null);
  const [regionId, setRegionId] = useState<string | null>(null);
  const [priceMin, setPriceMin] = useState<number | null>(null);
  const [priceMax, setPriceMax] = useState<number | null>(null);
  const [sqftLivingMin, setSqftLivingMin] = useState<number | null>(null);
  const [sqftLivingMax, setSqftLivingMax] = useState<number | null>(null);
  const [sort, setSort] = useState<Sort>(null);
  const { propertyType } = useParams<PropertiesParams>();
  const {
    data: Properties,
    isLoading,
    refetch,
  } = useGetPropertiesQuery({
    page,
    name,
    address,
    bedrooms,
    bathrooms,
    kitchens,
    floors,
    floorsLevel,
    north,
    south,
    east,
    west,
    cityId,
    regionId,
    priceMin,
    priceMax,
    sqftLivingMin,
    sqftLivingMax,
    typeId: propertyType ? PROPERTY_TYPE[propertyType] : null,
    sort,
  });

  const handleFilter = () => {
    refetch();
  };
  return (
    <div>
      <Filter
        {...{
          page,
          name,
          address,
          bedrooms,
          bathrooms,
          kitchens,
          floors,
          floorsLevel,
          north,
          south,
          east,
          west,
          cityId,
          regionId,
          priceMin,
          priceMax,
          sqftLivingMin,
          sqftLivingMax,
          setPage,
          setName,
          setAddress,
          setBedrooms,
          setBathrooms,
          setKitchens,
          setFloors,
          setFloorsLevel,
          setNorth,
          setSouth,
          setEast,
          setWest,
          setCityId,
          setRegionId,
          setPriceMin,
          setPriceMax,
          setSqftLivingMin,
          setSqftLivingMax,
          handleFilter,
          setSort,
        }}
      />
    </div>
  );
};

export default Properties;
