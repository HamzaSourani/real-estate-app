import React from "react";
import { useNavigate } from "react-router-dom";
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
  IconButton,
  CardActionArea,
} from "@mui/material";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CONTRACT_TYPE } from "@/type";
import ForSellIcon from "../../svg/forSellIcon";
import ForRentIcon from "../../svg/forRentIcon";
import { useToggleFavoriteMutation } from "@/api/user/qeuries";
import { Props } from "./type";
import useToggleEle from "@/hooks/useToggleEle";
import UnAuthorizedDialog from "../../dialog/unAuthDialog";
import useAuthorization from "@/hooks/useAuthorization";
import PropertyOptions from "./options";
import NAVIGATION from "@/constants/navigation";
import { Image } from "@/api/property/type";

const PropertyCard = ({
  id,
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
  queryKey,
  has_special_order,
  has_update_order,
  isUserProperty = false,
}: Props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [
    openUnAuthorizedDialog,
    handleOpenUnAuthorizedDialog,
    handleCloseUnAuthorizedDialog,
  ] = useToggleEle(false);
  const isAuthorized = useAuthorization();
  const { mutate: toggleFavorite } = useToggleFavoriteMutation(queryKey, id);
  const handleToggleFavorite = () => {
    toggleFavorite({ propertyId: id });
  };
  return (
    <>
      <Card sx={{ maxWidth: 415 }}>
        <CardHeader
          title={name}
          subheader={moment(date_of_publish).format("MMM Do YY")}
          action={
            isUserProperty ? (
              <PropertyOptions
                id={id}
                name={name}
                hasSpecialOrder={has_special_order}
                hasUpdateOrder={has_update_order}
              />
            ) : contract_type === CONTRACT_TYPE.SELL ? (
              <ForSellIcon sx={{ color: "red" }} />
            ) : (
              <ForRentIcon sx={{ color: "green" }} />
            )
          }
        />
        <CardActionArea
          onClick={() =>
            navigate(`/${NAVIGATION.MAIN_PAGES.SHOW_PROPERTY(id)}`)
          }
        >
          <CardMedia
            component={"img"}
            height={194}
            src={(image as Image).media_url}
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
        </CardActionArea>
        <CardActions>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <IconButton
              onClick={() => {
                isAuthorized
                  ? handleToggleFavorite()
                  : handleOpenUnAuthorizedDialog();
              }}
            >
              {is_favorite ? (
                <FavoriteIcon sx={{ color: "red" }} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
            <Typography>{favorite_count}</Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <VisibilityIcon color="primary" />
            <Typography>{views_count}</Typography>
          </Stack>
        </CardActions>
      </Card>
      <UnAuthorizedDialog
        open={openUnAuthorizedDialog}
        handleClose={handleCloseUnAuthorizedDialog}
      />
    </>
  );
};

export default PropertyCard;
