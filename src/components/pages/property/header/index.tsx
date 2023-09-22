import { Box, Stack, Typography } from "@mui/material";
import ForSellIcon from "@/components/items/svg/forSellIcon";
import ForRentIcon from "@/components/items/svg/forRentIcon";
import { CONTRACT_TYPE } from "@/type";
import { Props } from "./type";

const PropertyHeader = ({ name, contract_type }: Props) => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      component={"header"}
    >
      <Typography fontWeight={"600"} variant="h4" component={"h1"}>
        {name}
      </Typography>
      <Box>
        {contract_type === CONTRACT_TYPE.SELL ? (
          <ForSellIcon
            sx={{
              color: "red",
              fontSize: { xs: "3rem", sm: "4rem", md: "5rem", lg: "6rem" },
            }}
          />
        ) : (
          <ForRentIcon
            sx={{
              color: "green",
              fontSize: { xs: "3rem", sm: "4rem", md: "5rem", lg: "6rem" },
            }}
          />
        )}
      </Box>
    </Stack>
  );
};

export default PropertyHeader;
