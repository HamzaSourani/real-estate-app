import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const PropertyImagesSkeleton = () => {
  return (
    <Box
      sx={{
        height: { xs: 200, sm: 250, md: 350, lg: 400 },
      }}
    >
      <Skeleton
        variant="rounded"
        width={"100%"}
        height={"100%"}
        sx={{ borderRadius: "1rem" }}
      />
    </Box>
  );
};

export default PropertyImagesSkeleton;
