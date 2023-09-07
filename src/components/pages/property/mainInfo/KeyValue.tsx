import React from "react";
import { KeyValueProps } from "./type";
import { Paper, Stack, Typography } from "@mui/material";

const KeyValue = ({ Icon, label, value }: KeyValueProps) => {
  return (
    <Paper elevation={2} sx={{ p: 1 }}>
      <Stack alignItems={"center"} spacing={1}>
        <Typography
          textAlign={"center"}
          fontSize={{ md: "1.2rem" }}
          color={"primary"}
          fontWeight={"bold"}
        >
          {label}
        </Typography>
        <Stack direction={"row"} spacing={1}>
          {<Icon color="secondary" />}
          <Typography>{value}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default KeyValue;
