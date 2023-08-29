import { useTranslation } from "react-i18next";
import { useFormikContext } from "formik";
import { Grid, TextField } from "@mui/material";
import { AddPropertyValues } from "@/pages/addEditProperty/type";

const RoomsAndFloorDetailsStep = () => {
  const { t } = useTranslation();
  const { values, errors, touched, handleChange, setFieldTouched } =
    useFormikContext<AddPropertyValues>();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          name="bed_rooms"
          type="number"
          label={t("pages.property.bedrooms")}
          fullWidth
          value={values.bed_rooms}
          onBlur={() => setFieldTouched("bed_rooms", true)}
          error={!!(touched.bed_rooms && errors.bed_rooms)}
          helperText={
            !!(touched.bed_rooms && errors.bed_rooms) && errors.bed_rooms
          }
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          name="bath_rooms"
          type="number"
          label={t("pages.property.bathrooms")}
          fullWidth
          value={values.bath_rooms}
          onBlur={() => setFieldTouched("bath_rooms", true)}
          error={!!(touched.bath_rooms && errors.bath_rooms)}
          helperText={
            !!(touched.bath_rooms && errors.bath_rooms) && errors.bath_rooms
          }
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          name="kitchens"
          type="number"
          label={t("pages.property.kitchens")}
          fullWidth
          value={values.kitchens}
          onBlur={() => setFieldTouched("kitchens", true)}
          error={!!(touched.kitchens && errors.kitchens)}
          helperText={
            !!(touched.kitchens && errors.kitchens) && errors.kitchens
          }
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          name="floors"
          type="number"
          label={t("pages.property.floors")}
          fullWidth
          value={values.floors}
          onBlur={() => setFieldTouched("floors", true)}
          error={!!(touched.floors && errors.floors)}
          helperText={!!(touched.floors && errors.floors) && errors.floors}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          name="floor_level"
          type="number"
          label={t("pages.property.floor-level")}
          fullWidth
          value={values.floor_level}
          onBlur={() => setFieldTouched("floor_level", true)}
          error={!!(touched.floor_level && errors.floor_level)}
          helperText={
            !!(touched.floor_level && errors.floor_level) && errors.floor_level
          }
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
};

export default RoomsAndFloorDetailsStep;
