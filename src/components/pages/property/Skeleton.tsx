import Grid from "@mui/material/Grid";
import { alpha } from "@mui/material";
import PropertyHeaderSkeleton from "./header/Skeleton";
import PropertyImagesSkeleton from "./imagesSlide/Skeleton";
import PropertyActionSkeleton from "./action/Skeleton";
import MainPropertyInfoSkeleton from "./mainInfo/Skeleton";

const PropertySkeleton = () => {
  return (
    <Grid container rowGap={2} sx={{ my: 4 }}>
      <Grid item xs={12} px={2}>
        <PropertyHeaderSkeleton />
      </Grid>
      <Grid
        item
        container
        spacing={2}
        xs={12}
        sx={{
          bgcolor: (theme) => alpha(theme.palette.primary.dark, 0.1),
          px: 2,
          py: 4,
        }}
      >
        <Grid item xs={12} md={5} lg={6} sx={{ order: { xs: 1, md: 0 } }}>
          <MainPropertyInfoSkeleton />
        </Grid>
        <Grid item xs={12} md={7} lg={6} sx={{ order: { xs: 0, md: 1 } }}>
          <PropertyImagesSkeleton />
          <PropertyActionSkeleton />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PropertySkeleton;
