import { Skeleton, Stack, Typography } from "@mui/material";
const PropertyHeaderSkeleton = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      component={"header"}
    >
      <Typography fontWeight={"600"} variant="h1" width={"40%"}>
        <Skeleton />
      </Typography>

      <Skeleton width={100} height={100} />
    </Stack>
  );
};

export default PropertyHeaderSkeleton;
