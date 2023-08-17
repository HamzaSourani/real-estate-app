import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export interface Props {
  message: string | undefined | null;
}
const Error = ({ message }: Props) => {
  return (
    <Box
      sx={{
        height: { xs: 200, sm: 250, md: 350, lg: 400 },
        width: "80%",
        m: "auto",
        borderRadius: "1rem",
      }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography
        variant="h5"
        color={"error"}
        textAlign={"center"}
        component={"p"}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default Error;
