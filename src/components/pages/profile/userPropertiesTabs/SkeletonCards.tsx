import Box from "@mui/material/Box";
import SkeletonProperCard from "@/components/items/cards/property/skeleton";

const SkeletonCards = () => {
  return (
    <>
      {Array.from(new Array(3)).map((card) => (
        <Box width={400}>
          <SkeletonProperCard key={card} />
        </Box>
      ))}
    </>
  );
};
export default SkeletonCards;
