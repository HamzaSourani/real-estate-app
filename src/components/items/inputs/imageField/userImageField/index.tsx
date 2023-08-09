import React, { ChangeEvent } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Avatar, Box, IconButton } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useUploadImageMutation } from "@/api/image/queries";
import { UserProfileResponse } from "@/api/user/type";
import { useAddImageMutation } from "@/api/user/qeuries";
const UserImageField = () => {
  const queryClient = useQueryClient();
  const userProfile: UserProfileResponse | undefined = queryClient.getQueryData(
    ["get-user-profile"]
  );
  const { mutate: uploadImage } = useUploadImageMutation();
  const { mutate: addImage } = useAddImageMutation();
  console.log(userProfile);
  const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      uploadImage(
        { image: e.target.files[0] },
        {
          onSuccess(data, variables, context) {
            addImage(
              { image: data.data.image },
              {
                onSuccess(data, variables, context) {
                  queryClient.refetchQueries(["get-user-profile"]);
                },
              }
            );
          },
        }
      );
    }
  };
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <input
        id="upload-image"
        type="file"
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleUploadImage}
      />

      <IconButton
        sx={{
          position: "absolute",
          zIndex: 5,
          top: "50%",
          left: "-15px",
        }}
        color="secondary"
      >
        <label htmlFor="upload-image">
          <Box
            component={"span"}
            sx={{
              p: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "100%",
              bgcolor: (theme) => theme.palette.primary.main,
              // border: (theme) => `1px solid ${theme.palette.primary.main}`,
            }}
          >
            <CameraAltIcon />
          </Box>
        </label>
      </IconButton>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 190,
          height: 190,
          borderRadius: "100%",
          background: (theme) =>
            ` linear-gradient(180deg,${theme.palette.common.white} 50%,  ${theme.palette.primary.main} 50%)`,
        }}
      >
        <Avatar
          src={userProfile?.data.user.image.media_url}
          sx={{
            width: 180,
            height: 180,
          }}
        />
      </Box>
    </Box>
  );
};

export default UserImageField;
