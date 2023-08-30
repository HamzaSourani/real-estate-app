import Grid from "@mui/material/Grid";
import SkeletonProperCard from "@/components/items/cards/property/skeleton";

const Loading = () => {
  return (
    <Grid container spacing={2}>
      {Array.from(new Array(8)).map((card) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <SkeletonProperCard key={card} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Loading;
