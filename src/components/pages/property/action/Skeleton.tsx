import { Skeleton, Stack } from "@mui/material";

const PropertyActionSkeleton = () => {
  return (
    <Stack direction={"row"} spacing={2} mx={2} my={1}>
      <Skeleton variant="rectangular" width={20} height={20} />
      <Skeleton variant="rectangular" width={20} height={20} />
    </Stack>
  );
};

export default PropertyActionSkeleton;
