import { useTranslation } from "react-i18next";
import { useFormikContext } from "formik";
import { Grid, FormControlLabel, Switch, TextField } from "@mui/material";
import { AddPropertyValues } from "@/pages/addEditProperty/type";

const LocationAndDirectionsStep = () => {
  const { t } = useTranslation();
  const {
    values,
    errors,
    touched,
    handleChange,
    setFieldValue,
    setFieldTouched,
  } = useFormikContext<AddPropertyValues>();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          name="zip_code"
          label={t("common.property.zip-code")}
          fullWidth
          value={values.zip_code}
          onBlur={() => setFieldTouched("zip_code", true)}
          error={!!(touched.zip_code && errors.zip_code)}
          helperText={
            !!(touched.zip_code && errors.zip_code) && errors.zip_code
          }
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          name="lat"
          label={t("common.property.lat")}
          fullWidth
          value={values.lat}
          onBlur={() => setFieldTouched("lat", true)}
          error={!!(touched.lat && errors.lat)}
          helperText={!!(touched.lat && errors.lat) && errors.lat}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          name="long"
          label={t("common.property.long")}
          fullWidth
          value={values.long}
          onBlur={() => setFieldTouched("long", true)}
          error={!!(touched.long && errors.long)}
          helperText={!!(touched.long && errors.long) && errors.long}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Switch
              checked={values.north}
              onChange={(e) => setFieldValue("north", e.target.checked)}
            />
          }
          label={t("common.property.north")}
        />
      </Grid>{" "}
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Switch
              checked={values.south}
              onChange={(e) => setFieldValue("south", e.target.checked)}
            />
          }
          label={t("common.property.south")}
        />
      </Grid>{" "}
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Switch
              checked={values.east}
              onChange={(e) => setFieldValue("east", e.target.checked)}
            />
          }
          label={t("common.property.east")}
        />
      </Grid>{" "}
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Switch
              checked={values.west}
              onChange={(e) => setFieldValue("west", e.target.checked)}
            />
          }
          label={t("common.property.west")}
        />
      </Grid>
    </Grid>
  );
};
export default LocationAndDirectionsStep;
