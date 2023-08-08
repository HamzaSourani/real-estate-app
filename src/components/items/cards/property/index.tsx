import React from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Box,
  Typography,
  Stack,
  Grid,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Property } from "@/api/property/type";
import { ContractType } from "@/type";
import ForSellIcon from "../../svg/forSellIcon";
import ForRentIcon from "../../svg/forRentIcon";

const ProperCard = ({
  name,
  date_of_publish,
  image,
  contract_type,
  bed_rooms,
  sqft_living,
  price,
  city,
  is_favorite,
  favorite_count,
  views_count,
}: Property) => {
  const { t } = useTranslation();
  return (
    <Card>
      <CardHeader
        title={name}
        subheader={moment(date_of_publish).format("MMM Do YY")}
        action={
          contract_type === ContractType.SELL ? (
            <ForSellIcon sx={{ color: "red" }} />
          ) : (
            <ForRentIcon sx={{ color: "green" }} />
          )
        }
      />
      <CardMedia
        component={"img"}
        height={194}
        src={image.media_url}
        alt={name}
      />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography color={"primary"} sx={{ fontWeight: "500" }}>
              {t("components.property-card.rooms")}
              <Box
                component={"span"}
                sx={{
                  ml: 1,

                  fontWeight: "initial",
                }}
              >
                {bed_rooms}
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography color={"primary"} sx={{ fontWeight: "500" }}>
              {t("components.property-card.area")}
              <Box
                component={"span"}
                sx={{
                  ml: 1,

                  fontWeight: "initial",
                }}
              >
                {sqft_living}
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <AttachMoneyIcon color="primary" />
              <Typography>{price}</Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <LocationOnIcon color="primary" />
              <Typography>{city.label}</Typography>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          {is_favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          <Typography>{favorite_count}</Typography>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <VisibilityIcon color="primary" />
          <Typography>{views_count}</Typography>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default ProperCard;
