import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Grid, alpha } from "@mui/material";
import L from "leaflet";
import { useGetPropertyQuery } from "@/api/property/queries";
import { useParams } from "react-router-dom";
import { Params } from "@/type";
import PropertyHeader from "@/components/pages/property/header";
import PropertySkeleton from "@/components/pages/property/Skeleton";
import PropertyImagesSlide from "@/components/pages/property/imagesSlide";
import { Image } from "@/api/property/type";
import PropertyAction from "@/components/pages/property/action";
import MainPropertyInfo from "@/components/pages/property/mainInfo";
import ReviewProperty from "@/components/pages/property/review";
import Directions from "@/components/pages/property/directions";
import AreaAndRestInfo from "@/components/pages/property/areaAndRestInfo";
var myIcon = L.icon({
  iconUrl: "/location-sign-svgrepo-com.svg",
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  // shadowUrl: "my-icon-shadow.png",
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
});
const ShowProperty = () => {
  const { propertyId } = useParams<Params>();
  const {
    data: property,
    isLoading,
    isError,
  } = useGetPropertyQuery({ propertyId });
  if (isLoading) return <PropertySkeleton />;
  if (isError) return <></>;
  console.log(propertyId, "propertyId");
  const {
    id,
    name,
    contract_type,
    bed_rooms,
    bath_room,
    kitchens,
    floors,
    floor_level,
    sqft_living,
    sqft_living_15,
    sqft_lot,
    sqft_lot_15,
    sqft_above,
    sqft_basement,
    view,
    condition,
    grade,
    water_front,
    north,
    south,
    east,
    west,
    yr_built,
    yr_renovated,
    zip_code,
    lat,
    long,
    address,
    detail,
    price,
    is_favorite,
    favorite_count,
    views_count,
    furnish,
    region,
    features,
    type,
    city,
    image,
  } = property.data.property;
  return (
    <Grid container rowGap={2} sx={{ my: 4 }}>
      <Grid item xs={12} px={2}>
        <PropertyHeader {...{ name, contract_type }} />
      </Grid>
      <Grid
        item
        container
        xs={12}
        spacing={2}
        sx={{
          bgcolor: (theme) => alpha(theme.palette.primary.dark, 0.1),
          px: 2,
          py: 4,
        }}
      >
        <Grid item xs={12} md={5} lg={6} sx={{ order: { xs: 1, md: 0 } }}>
          <MainPropertyInfo
            {...{
              bed_rooms,
              bath_room,
              kitchens,
              yr_built,
              yr_renovated,
              address,
              detail,
              price,
              furnish,
              region,
              type,
              city,
            }}
          />
        </Grid>
        <Grid item xs={12} md={7} lg={6} sx={{ order: { xs: 0, md: 1 } }}>
          <PropertyImagesSlide images={image as Image[]} />
          <PropertyAction
            {...{ id, is_favorite, favorite_count, views_count }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={"center"}
        xs={12}
        spacing={2}
        sx={{
          px: 2,
          py: 4,
        }}
      >
        <Grid item xs={12} md={7}>
          <ReviewProperty {...{ view, condition, grade }} />
        </Grid>
        <Grid item xs={12} md={5}>
          <Directions {...{ north, south, east, west }} />
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        spacing={2}
        sx={{
          bgcolor: (theme) => alpha(theme.palette.primary.dark, 0.1),
          px: 2,
          py: 4,
        }}
      >
        <Grid item xs={12} md={5}>
          <AreaAndRestInfo
            {...{
              floors,
              floor_level,
              sqft_living,
              sqft_living_15,
              sqft_lot,
              sqft_lot_15,
              sqft_above,
              sqft_basement,
              water_front,
              features,
            }}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <MapContainer
            style={{ width: "100%", aspectRatio: "1/1" }}
            center={[Number(lat), Number(long)]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={myIcon} position={[Number(lat), Number(long)]}>
              <Popup>{name}</Popup>
            </Marker>
          </MapContainer>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ShowProperty;
