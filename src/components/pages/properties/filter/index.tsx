import { useTranslation } from "react-i18next";
import {
  Grid,
  IconButton,
  Menu,
  TextField,
  FormControlLabel,
  Switch,
  Autocomplete,
  Stack,
  Typography,
  Slider,
  Button,
  Skeleton,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  useGetAreaRangeQuery,
  useGetPriceRangeQuery,
  useGetRegionsQuery,
} from "@/api/property/queries";
import { useGetAllCitiesQuery } from "@/api/city/queries";
import useAnchorEle from "@/hooks/useAnchorEle";
import { Props } from "./type";
import Sort from "./sort";
import { showError } from "@/libs/reactToastify";

const Filter = ({
  name,
  address,
  bedrooms,
  bathrooms,
  kitchens,
  floors,
  floorsLevel,
  north,
  south,
  east,
  west,
  city,
  region,
  priceMin,
  priceMax,
  sqftLivingMin,
  sqftLivingMax,
  setName,
  setAddress,
  setBedrooms,
  setBathrooms,
  setKitchens,
  setFloors,
  setFloorsLevel,
  setNorth,
  setSouth,
  setEast,
  setWest,
  setCity,
  setRegion,
  setPriceMin,
  setPriceMax,
  setSqftLivingMin,
  setSqftLivingMax,
  setSort,
  refetch,
}: Props) => {
  const [open, anchorEl, handleClick, handleClose] = useAnchorEle();
  const { t } = useTranslation();
  const { data: cities, isLoading: isCityLoading } = useGetAllCitiesQuery();
  const { data: regions, isLoading: isRegionsLoading } = useGetRegionsQuery();
  const { data: priceRange, isLoading: isPriceRangeLoading } =
    useGetPriceRangeQuery();
  const { data: areaRange, isLoading: isAreaRangeLoading } =
    useGetAreaRangeQuery();
  const minPriceDistance = 0;
  const minSqftLivingDistance = 0;
  const handelChangePriceRange = (
    e: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) return;
    if (activeThumb === 0) {
      setPriceMax(newValue[1]);
      setPriceMin(Math.min(newValue[0], newValue[1] - minPriceDistance));
    } else {
      setPriceMax(Math.max(newValue[1], newValue[0] + minPriceDistance));
      setPriceMin(newValue[0]);
    }
  };
  const handelChangeSqftLivingRange = (
    e: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) return;
    if (activeThumb === 0) {
      setSqftLivingMax(newValue[1]);
      setSqftLivingMin(
        Math.min(newValue[0], newValue[1] - minSqftLivingDistance)
      );
    } else {
      setSqftLivingMax(
        Math.max(newValue[1], newValue[0] + minSqftLivingDistance)
      );
      setSqftLivingMin(newValue[0]);
    }
  };
  const handleReset = () => {
    setName("");
    setAddress("");
    setBedrooms(null);
    setBathrooms(null);
    setKitchens(null);
    setFloors(null);
    setFloorsLevel(null);
    setNorth(null);
    setSouth(null);
    setEast(null);
    setWest(null);
    setCity(null);
    setRegion(null);
    setPriceMin(null);
    setPriceMax(null);
    setSqftLivingMin(null);
    setSqftLivingMax(null);
  };
  return (
    <>
      <IconButton onClick={handleClick}>
        <FilterListIcon />
      </IconButton>
      {
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={() => {
            handleReset();
            handleClose();
          }}
          elevation={1}
          sx={{ width: "100vw" }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Grid container spacing={2} columns={15} sx={{ py: 2, px: 3 }}>
            <Grid item xs={15}>
              <Sort setSort={setSort} />
            </Grid>
            <Grid item xs={7.5} sm={5} md={3.75} lg={3}>
              <TextField
                label={t("common.property.name")}
                value={name}
                fullWidth
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={7.5} sm={5} md={3.75} lg={3}>
              <TextField
                label={t("common.property.bedrooms")}
                type="number"
                fullWidth
                value={bedrooms}
                onChange={(e) => setBedrooms(Number(e.target.value))}
              />
            </Grid>
            <Grid item xs={7.5} sm={5} md={3.75} lg={3}>
              <TextField
                label={t("common.property.bathrooms")}
                type="number"
                fullWidth
                value={bathrooms}
                onChange={(e) => setBathrooms(Number(e.target.value))}
              />
            </Grid>
            <Grid item xs={7.5} sm={5} md={3.75} lg={3}>
              <TextField
                label={t("common.property.kitchens")}
                type="number"
                fullWidth
                value={kitchens}
                onChange={(e) => setKitchens(Number(e.target.value))}
              />
            </Grid>
            <Grid item xs={7.5} sm={5} md={3.75} lg={3}>
              <TextField
                label={t("common.property.floors")}
                type="number"
                fullWidth
                value={floors}
                onChange={(e) => setFloors(Number(e.target.value))}
              />
            </Grid>
            <Grid item xs={7.5} sm={5} md={3.75} lg={3}>
              <TextField
                label={t("common.property.floor-level")}
                type="number"
                fullWidth
                value={floorsLevel}
                onChange={(e) => setFloorsLevel(Number(e.target.value))}
              />
            </Grid>
            <Grid item xs={7.5} sm={5} md={3.75} lg={3}>
              <Autocomplete
                options={cities?.data.cities ?? []}
                value={city}
                onChange={(e, value) => {
                  setCity(value);
                }}
                fullWidth
                loading={isCityLoading}
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    label={t("pages.auth.sign-up.city")}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={7.5} sm={5} md={3.75} lg={3}>
              <Autocomplete
                options={regions?.data.regions ?? []}
                value={region}
                onChange={(e, value) => {
                  setRegion(value);
                }}
                fullWidth
                loading={isRegionsLoading}
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    label={t("common.property.region")}
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={15} lg={6}>
              <TextField
                label={t("common.property.address")}
                fullWidth
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={7.5} sm={3.75} lg={2}>
              {" "}
              <FormControlLabel
                control={
                  <Switch
                    checked={north ?? false}
                    onChange={(e) => setNorth(e.target.checked)}
                  />
                }
                label={t("common.property.north")}
              />
            </Grid>
            <Grid item xs={7.5} sm={3.75} lg={2}>
              {" "}
              <FormControlLabel
                control={
                  <Switch
                    checked={south ?? false}
                    onChange={(e) => setSouth(e.target.checked)}
                  />
                }
                label={t("common.property.south")}
              />
            </Grid>
            <Grid item xs={7.5} sm={3.75} lg={2}>
              {" "}
              <FormControlLabel
                control={
                  <Switch
                    checked={east ?? false}
                    onChange={(e) => setEast(e.target.checked)}
                  />
                }
                label={t("common.property.east")}
              />
            </Grid>
            <Grid item xs={7.5} sm={3.75} lg={2}>
              {" "}
              <FormControlLabel
                control={
                  <Switch
                    checked={west ?? false}
                    onChange={(e) => setWest(e.target.checked)}
                  />
                }
                label={t("common.property.west")}
              />
            </Grid>

            <Grid item xs={15} md={12} lg={9}>
              <Stack direction={"column"} spacing={1}>
                <Typography>{t("common.property.price")}</Typography>
                {isPriceRangeLoading ? (
                  <Skeleton />
                ) : (
                  <Slider
                    max={priceRange?.data.max_price}
                    min={priceRange?.data.min_price}
                    valueLabelDisplay="auto"
                    value={[priceMin ?? 0, priceMax ?? 0]}
                    onChange={handelChangePriceRange}
                    disableSwap
                  />
                )}
              </Stack>
            </Grid>
            <Grid item xs={15} md={12} lg={9}>
              <Stack direction={"column"} spacing={1}>
                <Typography>{t("common.property.sqft-living")}</Typography>
                {isAreaRangeLoading ? (
                  <Skeleton />
                ) : (
                  <Slider
                    max={areaRange?.data.max_area}
                    min={areaRange?.data.min_area}
                    valueLabelDisplay="auto"
                    value={[sqftLivingMin ?? 0, sqftLivingMax ?? 0]}
                    onChange={handelChangeSqftLivingRange}
                    disableSwap
                  />
                )}
              </Stack>
            </Grid>
            <Grid item xs={15}>
              <Button
                onClick={async () => {
                  const { status } = await refetch();
                  if (status === "success") {
                    handleReset();
                    handleClose();
                  } else if (status === "error") {
                    showError(t("common.property.filter.error"));
                  }
                }}
                variant="contained"
              >
                {t("common.property.filter.title")}
              </Button>
            </Grid>
          </Grid>
        </Menu>
      }
    </>
  );
};

export default Filter;
