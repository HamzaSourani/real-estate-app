import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const Loading = () => {
  return (
    <Box
      sx={{
        height: { xs: 200, sm: 250, md: 350, lg: 400 },
        width: "80%",
        m: "auto",
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

export default Loading;
