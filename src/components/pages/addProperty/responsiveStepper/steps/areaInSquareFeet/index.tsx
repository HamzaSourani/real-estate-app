import { useTranslation } from "react-i18next";
import { useFormikContext } from "formik";
import { Grid, TextField } from "@mui/material";
import { AddPropertyValues } from "@/pages/addEditProperty/type";

const AreaInSquareFeetStep = () => {
  const { t } = useTranslation();
  const { values, errors, touched, handleChange, setFieldTouched } =
    useFormikContext<AddPropertyValues>();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          name="sqft_living"
          type="number"
          label={t("common.property.sqft-living")}
          fullWidth
          value={values.sqft_living}
          onBlur={() => setFieldTouched("sqft_living", true)}
          error={!!(touched.sqft_living && errors.sqft_living)}
          helperText={
            !!(touched.sqft_living && errors.sqft_living) && errors.sqft_living
          }
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          name="sqft_living_15"
          type="number"
          label={t("common.property.sqft-living-15")}
          fullWidth
          value={values.sqft_living_15}
          onBlur={() => setFieldTouched("sqft_living_15", true)}
          error={!!(touched.sqft_living_15 && errors.sqft_living_15)}
          helperText={
            !!(touched.sqft_living_15 && errors.sqft_living_15) &&
            errors.sqft_living_15
          }
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          name="sqft_lot"
          type="number"
          label={t("common.property.sqft-lot")}
          fullWidth
          value={values.sqft_lot}
          onBlur={() => setFieldTouched("sqft_lot", true)}
          error={!!(touched.sqft_lot && errors.sqft_lot)}
          helperText={
            !!(touched.sqft_lot && errors.sqft_lot) && errors.sqft_lot
          }
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          name="sqft_lot_15"
          type="number"
          label={t("common.property.sqft-lot-15")}
          fullWidth
          value={values.sqft_lot_15}
          onBlur={() => setFieldTouched("sqft_lot_15", true)}
          error={!!(touched.sqft_lot_15 && errors.sqft_lot_15)}
          helperText={
            !!(touched.sqft_lot_15 && errors.sqft_lot_15) && errors.sqft_lot_15
          }
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          name="sqft_above"
          type="number"
          label={t("common.property.above")}
          fullWidth
          value={values.sqft_above}
          onBlur={() => setFieldTouched("sqft_above", true)}
          error={!!(touched.sqft_above && errors.sqft_above)}
          helperText={
            !!(touched.sqft_above && errors.sqft_above) && errors.sqft_above
          }
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          name="sqft_basement"
          type="number"
          label={t("common.property.basement")}
          fullWidth
          value={values.sqft_basement}
          onBlur={() => setFieldTouched("sqft_basement", true)}
          error={!!(touched.sqft_basement && errors.sqft_basement)}
          helperText={
            !!(touched.sqft_basement && errors.sqft_basement) &&
            errors.sqft_basement
          }
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
};

export default AreaInSquareFeetStep;
