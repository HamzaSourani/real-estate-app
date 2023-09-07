import { Grid, Skeleton } from "@mui/material";

const MainPropertyInfoSkeleton = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Skeleton variant={"rectangular"} height={70} />
      </Grid>
      <Grid item xs={12}>
        <Skeleton variant={"rectangular"} height={70} />
      </Grid>
      <Grid item xs={6} sm={4}>
        <Skeleton variant={"rectangular"} height={70} />
      </Grid>
      <Grid item xs={6} sm={4}>
        <Skeleton variant={"rectangular"} height={70} />
      </Grid>
      <Grid item xs={6} sm={4}>
        <Skeleton variant={"rectangular"} height={70} />
      </Grid>
      <Grid item xs={6} sm={4}>
        <Skeleton variant={"rectangular"} height={70} />
      </Grid>
      <Grid item xs={6} sm={4}>
        <Skeleton variant={"rectangular"} height={70} />
      </Grid>
      <Grid item xs={6} sm={4}>
        <Skeleton variant={"rectangular"} height={70} />
      </Grid>
      <Grid item xs={6} sm={4}>
        <Skeleton variant={"rectangular"} height={70} />
      </Grid>
      <Grid item xs={6} sm={4} md={8}>
        <Skeleton variant={"rectangular"} height={70} />
      </Grid>
      <Grid item xs={6} sm={4} md={6}>
        <Skeleton variant={"rectangular"} height={70} />
      </Grid>
      <Grid item xs={6} sm={4} md={6}>
        <Skeleton variant={"rectangular"} height={70} />
      </Grid>
    </Grid>
  );
};

export default MainPropertyInfoSkeleton;
