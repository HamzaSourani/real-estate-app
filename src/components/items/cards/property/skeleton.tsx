import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Skeleton,
} from "@mui/material";

const SkeletonProperCard = () => {
  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader title={<Skeleton />} subheader={<Skeleton />} />
      <CardMedia component={Skeleton} height={194} />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography sx={{ fontWeight: "500" }}>
              <Skeleton />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontWeight: "500" }}>
              <Skeleton />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              <Skeleton />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              <Skeleton />
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SkeletonProperCard;
