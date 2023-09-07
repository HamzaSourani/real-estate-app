import { Box, IconButton, Stack, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useToggleFavoriteMutation } from "@/api/user/qeuries";
import UnAuthorizedDialog from "@/components/items/dialog/unAuthDialog";
import useToggleEle from "@/hooks/useToggleEle";
import useAuthorization from "@/hooks/useAuthorization";
import { Props } from "./type";

const PropertyAction = ({
  id,
  is_favorite,
  favorite_count,
  views_count,
}: Props) => {
  const [
    openUnAuthorizedDialog,
    handleOpenUnAuthorizedDialog,
    handleCloseUnAuthorizedDialog,
  ] = useToggleEle(false);
  const isAuthorized = useAuthorization();
  const { mutate: toggleFavorite } = useToggleFavoriteMutation(
    ["get-property", String(id)],
    id
  );
  const handleToggleFavorite = () => {
    toggleFavorite({ propertyId: id });
  };
  return (
    <Stack direction={"row"} spacing={2} mx={2} my={1}>
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
      <UnAuthorizedDialog
        open={openUnAuthorizedDialog}
        handleClose={handleCloseUnAuthorizedDialog}
      />
    </Stack>
  );
};

export default PropertyAction;
