import { useState } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { Box, alpha, Grid } from "@mui/material";
import { useGetPropertiesInfinityQuery } from "@/api/property/queries";
import { PROPERTY_TYPE } from "@/constants/property";
import Filter from "@/components/pages/properties/filter";
import PropertyTitle from "@/components/pages/properties/title";
import PropertyCard from "@/components/items/cards/property";
import Loading from "@/components/pages/properties/fullback/loading";
import Error from "@/components/pages/properties/fullback/error";
import Empty from "@/components/pages/properties/fullback/empty";
import { AutocompleteObject } from "@/type";
import { PropertiesParams, Sort } from "./type";

const Properties = () => {
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
  const [city, setCity] = useState<AutocompleteObject | null>(null);
  const [region, setRegion] = useState<AutocompleteObject | null>(null);
  const [priceMin, setPriceMin] = useState<number | null>(null);
  const [priceMax, setPriceMax] = useState<number | null>(null);
  const [sqftLivingMin, setSqftLivingMin] = useState<number | null>(null);
  const [sqftLivingMax, setSqftLivingMax] = useState<number | null>(null);
  const [sort, setSort] = useState<Sort>(null);
  const { propertyType } = useParams<PropertiesParams>();
  const {
    data: properties,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    refetch,
  } = useGetPropertiesInfinityQuery({
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
    city,
    region,
    priceMin,
    priceMax,
    sqftLivingMin,
    sqftLivingMax,
    typeId: propertyType ? PROPERTY_TYPE[propertyType] : null,
    sort,
  });

  if (isLoading)
    return (
      <Box
        sx={{
          py: 4,
          px: 2,
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
        }}
      >
        <PropertyTitle></PropertyTitle>
        <Loading />
      </Box>
    );
  if (isError) return <Error />;
  return (
    <Box
      sx={{
        py: 4,
        px: 2,
        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
        minHeight: "100vh",
      }}
    >
      <PropertyTitle>
        <Filter
          {...{
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
            city,
            region,
            priceMin,
            priceMax,
            sqftLivingMin,
            sqftLivingMax,
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
            setCity,
            setRegion,
            setPriceMin,
            setPriceMax,
            setSqftLivingMin,
            setSqftLivingMax,
            setSort,
            refetch,
          }}
        />
      </PropertyTitle>
      <InfiniteScroll
        dataLength={
          properties?.pages.reduce(
            (acc, pre) => acc + pre.data.data.properties.length,
            0
          ) ?? 0
        }
        hasMore={!!hasNextPage}
        next={() => {
          fetchNextPage();
        }}
        loader={<Loading />}
      >
        <Grid container spacing={2}>
          {properties.pages[0].data.data.properties.length ? (
            properties?.pages.map((page) =>
              page.data.data.properties.map((property) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <PropertyCard
                    {...property}
                    queryKey={[
                      "get-properties",
                      ...(propertyType
                        ? [PROPERTY_TYPE[propertyType] as number]
                        : []),
                    ]}
                  />
                </Grid>
              ))
            )
          ) : (
            <Empty />
          )}
        </Grid>
      </InfiniteScroll>
    </Box>
  );
};

export default Properties;
