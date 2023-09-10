import { useTranslation } from "react-i18next";
import { useFormikContext } from "formik";
import { Grid, TextField } from "@mui/material";
import { AddPropertyValues } from "@/pages/addEditProperty/type";
import SelectFiled from "@/components/items/inputs/selectField";
import { RATES } from "@/constants/property";

const RatingAndDateStep = () => {
  const { t } = useTranslation();
  const { values, errors, touched, handleChange, setFieldTouched } =
    useFormikContext<AddPropertyValues>();

  const CONDITION_OPTIONS = Object.values(RATES).map((condition, index) => ({
    value: index + 1,
    label: `common.rates.${condition}`,
  }));
  const VIEW_OPTIONS = Object.values(RATES).map((condition, index) => ({
    value: index,
    label: `common.rates.${condition}`,
  }));
  const GRADE_OPTIONS = Array.from(new Array(12)).map((_, index) => ({
    value: index,
    label: String(index),
  }));
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          name="yr_built"
          type="date"
          label={t("common.property.yr-build")}
          InputLabelProps={{ shrink: true }}
          fullWidth
          value={values.yr_built}
          onBlur={() => setFieldTouched("yr_built", true)}
          error={!!(touched.yr_built && errors.yr_built)}
          helperText={
            !!(touched.yr_built && errors.yr_built) && errors.yr_built
          }
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name="yr_renovated"
          type="date"
          label={t("common.property.yr-renovated")}
          InputLabelProps={{ shrink: true }}
          fullWidth
          value={values.yr_renovated}
          onBlur={() => setFieldTouched("yr_renovated", true)}
          error={!!(touched.yr_renovated && errors.yr_renovated)}
          helperText={
            !!(touched.yr_renovated && errors.yr_renovated) &&
            errors.yr_renovated
          }
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SelectFiled<keyof AddPropertyValues>
          name={"grade"}
          label="common.property.grade"
          options={GRADE_OPTIONS}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SelectFiled<keyof AddPropertyValues>
          name={"view"}
          label="common.property.view"
          options={VIEW_OPTIONS}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SelectFiled<keyof AddPropertyValues>
          name={"condition"}
          label="common.property.condition"
          options={CONDITION_OPTIONS}
        />
      </Grid>
    </Grid>
  );
};

export default RatingAndDateStep;
