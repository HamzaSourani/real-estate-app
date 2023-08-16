import React, { useState } from "react";
import { Box, Tabs, Tab, alpha } from "@mui/material";
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
      <Box sx={{ display: "flex", rowGap: 2, columnGap: 2 }}>
        {selectedTab === PROPERTIES_TABS.USER_PROPERTIES &&
          (isPropertiesLoading ? (
            <SkeletonCards />
          ) : properties?.data.properties.length ? (
            properties?.data.properties.map((property) => (
              <ProperCard key={property.id} {...property} />
            ))
          ) : (
            <HasNoProperties />
          ))}
        {selectedTab === PROPERTIES_TABS.USER_FAVORITE_PROPERTIES &&
          (isFavoritePropertiesLoading ? (
            <SkeletonCards />
          ) : favoriteProperties?.data.properties.length ? (
            favoriteProperties?.data.properties.map((property) => (
              <ProperCard key={property.id} {...property} />
            ))
          ) : (
            <HasNoFavoriteProperties />
          ))}
      </Box>
    </Box>
  );
};

export default UserPropertiesTabs;
