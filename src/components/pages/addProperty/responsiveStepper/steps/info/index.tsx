import { useTranslation } from "react-i18next";
import { useFormikContext } from "formik";
import {
  Autocomplete,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
} from "@mui/material";
import {
  useGetRegionsQuery,
  useGetPropertyTypesQuery,
  useGetFurnishesQuery,
  useGetCladdingsQuery,
} from "@/api/property/queries";
import { useGetAllCitiesQuery } from "@/api/city/queries";
import { AddPropertyValues } from "@/pages/addEditProperty/type";
import FeaturesAutocomplete from "./featureAutocomplete";
import SelectFiled from "@/components/items/inputs/selectField";
import { CONTRACT_TYPE } from "@/type";

const InfoStep = () => {
  const { t } = useTranslation();
  const {
    values,
    errors,
    touched,
    handleChange,
    setFieldTouched,
    setFieldValue,
  } = useFormikContext<AddPropertyValues>();
  const { data: cities, isLoading: isCityLoading } = useGetAllCitiesQuery();
  const { data: regions, isLoading: isRegionsLoading } = useGetRegionsQuery();
  const { data: propertyTypes, isLoading: isPropertyTypesLoading } =
    useGetPropertyTypesQuery();

  const { data: furnishes, isLoading: isFurnishesLoading } =
    useGetFurnishesQuery();
  const { data: claddings, isLoading: isCladdingsLoading } =
    useGetCladdingsQuery();
  const CONTRACT_TYPE_OPTIONS = [
    {
      value: CONTRACT_TYPE.SELL,
      label: t("common.property.contract-type.sell"),
    },
    {
      value: CONTRACT_TYPE.RENT,
      label: t("common.property.contract-type.rent"),
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          name="name"
          label={t("common.property.name")}
          fullWidth
          value={values.name}
          onBlur={() => setFieldTouched("name", true)}
          error={!!(touched.name && errors.name)}
          helperText={!!(touched.name && errors.name) && errors.name}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Autocomplete
          options={cities?.data.cities ?? []}
          value={values.city}
          onChange={(e, value) => {
            setFieldValue("city", value);
          }}
          fullWidth
          loading={isCityLoading}
          renderInput={(params: any) => (
            <TextField
              {...params}
              name="city"
              label={t("pages.auth.sign-up.city")}
              fullWidth
              onBlur={() => setFieldTouched("city", true)}
              error={!!(touched.city && errors.city)}
              helperText={touched.city && errors.city ? errors.city : ""}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        {" "}
        <Autocomplete
          options={regions?.data.regions ?? []}
          value={values.region}
          onChange={(e, value) => {
            setFieldValue("region", value);
          }}
          fullWidth
          loading={isRegionsLoading}
          renderInput={(params: any) => (
            <TextField
              {...params}
              name="region"
              label={t("common.property.region")}
              fullWidth
              onBlur={() => setFieldTouched("region", true)}
              error={!!(touched.region && errors.region)}
              helperText={touched.region && errors.region ? errors.region : ""}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        {" "}
        <Autocomplete
          options={propertyTypes?.data.types ?? []}
          value={values.propertyType}
          onChange={(e, value) => {
            setFieldValue("propertyType", value);
          }}
          fullWidth
          loading={isPropertyTypesLoading}
          renderInput={(params: any) => (
            <TextField
              {...params}
              name="propertyType"
              label={t("common.property.property-type")}
              fullWidth
              onBlur={() => setFieldTouched("propertyType", true)}
              error={!!(touched.propertyType && errors.propertyType)}
              helperText={
                touched.propertyType && errors.propertyType
                  ? errors.propertyType
                  : ""
              }
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        {" "}
        <Autocomplete
          options={claddings?.data.claddings ?? []}
          value={values.cladding}
          onChange={(e, value) => {
            setFieldValue("cladding", value);
          }}
          fullWidth
          loading={isCladdingsLoading}
          renderInput={(params: any) => (
            <TextField
              {...params}
              name="cladding"
              label={t("common.property.cladding")}
              fullWidth
              onBlur={() => setFieldTouched("cladding", true)}
              error={!!(touched.cladding && errors.cladding)}
              helperText={
                touched.cladding && errors.cladding ? errors.cladding : ""
              }
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        {" "}
        <Autocomplete
          options={furnishes?.data.furnishes ?? []}
          value={values.furnish}
          onChange={(e, value) => {
            setFieldValue("furnish", value);
          }}
          fullWidth
          loading={isFurnishesLoading}
          renderInput={(params: any) => (
            <TextField
              {...params}
              name="furnish"
              label={t("common.property.furnish")}
              fullWidth
              onBlur={() => setFieldTouched("furnish", true)}
              error={!!(touched.furnish && errors.furnish)}
              helperText={
                touched.furnish && errors.furnish ? errors.furnish : ""
              }
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={5}>
        {" "}
        <TextField
          name="detail"
          label={t("common.property.detail")}
          value={values.detail}
          fullWidth
          onBlur={() => setFieldTouched("detail", true)}
          error={!!(touched.detail && errors.detail)}
          helperText={!!(touched.detail && errors.detail) && errors.detail}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={5}>
        {" "}
        <TextField
          name="address"
          label={t("common.property.address")}
          value={values.address}
          fullWidth
          onBlur={() => setFieldTouched("address", true)}
          error={!!(touched.address && errors.address)}
          helperText={!!(touched.address && errors.address) && errors.address}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={2}>
        <SelectFiled<keyof AddPropertyValues>
          name={"contract_type"}
          label="common.property.contract-type.title"
          options={CONTRACT_TYPE_OPTIONS}
        />
      </Grid>
      <Grid item xs={12}>
        <FeaturesAutocomplete />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Switch
              checked={values.water_front}
              onChange={(e) => setFieldValue("water_front", e.target.checked)}
            />
          }
          label={t("common.property.water-front")}
        />
      </Grid>
    </Grid>
  );
};

export default InfoStep;
