import Grid from "@mui/material/Grid";
import SkeletonProperCard from "@/components/items/cards/property/skeleton";

const SkeletonCards = () => {
  return (
    <>
      {Array.from(new Array(3)).map((card) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <SkeletonProperCard key={card} />
        </Grid>
      ))}
    </>
  );
};
export default SkeletonCards;
