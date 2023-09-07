import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import DetailsIcon from "@mui/icons-material/Details";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChairIcon from "@mui/icons-material/Chair";
import HouseIcon from "@mui/icons-material/House";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import { Props } from "./type";
import KeyValue from "./KeyValue";

const MainPropertyInfo = ({
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
}: Props) => {
  const { t } = useTranslation();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <KeyValue
          Icon={DetailsIcon}
          label={t("common.property.detail")}
          value={detail}
        />
      </Grid>
      <Grid item xs={12}>
        <KeyValue
          Icon={LocationOnIcon}
          label={t("common.property.address")}
          value={address}
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <KeyValue
          Icon={AttachMoneyIcon}
          label={t("common.property.price")}
          value={price}
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <KeyValue
          Icon={LocationCityIcon}
          label={t("common.property.city")}
          value={city.label}
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <KeyValue
          Icon={BathtubIcon}
          label={t("common.property.bathrooms")}
          value={bath_room}
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <KeyValue
          Icon={BedIcon}
          label={t("common.property.bedrooms")}
          value={bed_rooms}
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <KeyValue
          Icon={MicrowaveIcon}
          label={t("common.property.kitchens")}
          value={kitchens}
        />
      </Grid>

      <Grid item xs={6} sm={4}>
        <KeyValue
          Icon={ChairIcon}
          label={t("common.property.furnish")}
          value={furnish.label}
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <KeyValue
          Icon={HouseIcon}
          label={t("common.property.property-type")}
          value={type.label}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={8}>
        <KeyValue
          Icon={SouthAmericaIcon}
          label={t("common.property.region")}
          value={region.label}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={6}>
        <KeyValue
          Icon={CalendarMonthIcon}
          label={t("common.property.yr-build")}
          value={yr_built}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={6}>
        <KeyValue
          Icon={CalendarMonthIcon}
          label={t("common.property.yr-renovated")}
          value={yr_renovated}
        />
      </Grid>
    </Grid>
  );
};

export default MainPropertyInfo;
