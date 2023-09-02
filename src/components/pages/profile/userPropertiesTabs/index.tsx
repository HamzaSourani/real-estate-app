import React, { useState } from "react";
import { Box, Tabs, Tab, alpha, Grid } from "@mui/material";
import {
  useGetUserFavoriteProperties,
  useGetUserProperties,
} from "@/api/user/qeuries";
import ProperCard from "@/components/items/cards/property";
import { PROPERTIES_TABS } from "./type";
import SkeletonCards from "./SkeletonCards";
import HasNoFavoriteProperties from "./HasNoFavoriteProperties";
import HasNoProperties from "./HasNoProperties";

const UserPropertiesTabs = () => {
  const [selectedTab, setsSelectedTab] = useState<number>(
    PROPERTIES_TABS.USER_PROPERTIES
  );
  const { data: properties, isLoading: isPropertiesLoading } =
    useGetUserProperties({
      tab: selectedTab,
    });
  const { data: favoriteProperties, isLoading: isFavoritePropertiesLoading } =
    useGetUserFavoriteProperties({
      tab: selectedTab,
    });
  const handleSelectTap = (event: React.SyntheticEvent, newValue: number) => {
    setsSelectedTab(newValue);
  };
  return (
    <Box
      sx={{
        py: 2,
        my: 2,
        px: 2,
        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={selectedTab} onChange={handleSelectTap}>
          <Tab label="properties" />
          <Tab label="favorite properties" />
        </Tabs>
      </Box>
      <Grid container spacing={2} py={4}>
        {selectedTab === PROPERTIES_TABS.USER_PROPERTIES &&
          (isPropertiesLoading ? (
            <SkeletonCards />
          ) : properties?.data.properties.length ? (
            properties?.data.properties.map((property) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ProperCard
                  key={property.id}
                  {...property}
                  queryKey="get-user-properties"
                />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <HasNoProperties />
            </Grid>
          ))}
        {selectedTab === PROPERTIES_TABS.USER_FAVORITE_PROPERTIES &&
          (isFavoritePropertiesLoading ? (
            <SkeletonCards />
          ) : favoriteProperties?.data.properties.length ? (
            favoriteProperties?.data.properties.map((property) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ProperCard
                  key={property.id}
                  {...property}
                  queryKey="get-user-favorite-properties"
                />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <HasNoFavoriteProperties />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default UserPropertiesTabs;
