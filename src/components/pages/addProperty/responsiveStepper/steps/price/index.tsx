import { useTranslation } from "react-i18next";
import { useFormikContext } from "formik";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import RePredictIcon from "@mui/icons-material/Replay";
import { AddPropertyValues } from "@/pages/addEditProperty/type";
import PropertyImageField from "@/components/items/inputs/imageField/propertyImageField";
import { usePredictPriceOfPropertyMutation } from "@/api/property/queries";
import { showError } from "@/libs/reactToastify";
import { useEffect, useRef } from "react";

const PriceStep = () => {
  const predictButtonRef = useRef<HTMLButtonElement>(null!);
  const { t } = useTranslation();
  const { values, errors, touched, handleChange, setFieldTouched } =
    useFormikContext<AddPropertyValues>();
  const {
    mutate: predict,
    data,
    isError,
    isLoading,
  } = usePredictPriceOfPropertyMutation();

  useEffect(() => {
    predictButtonRef.current.click();
  }, []);

  const handlePredict = () => {
    const {
      bed_rooms: bedrooms,
      bath_rooms: bathrooms,
      sqft_living,
      sqft_lot,
      floors,
      water_front: waterfront,
      view,
      condition: condtion,
      grade,
      sqft_above,
      sqft_basement,
      yr_built,
      yr_renovated,
      zip_code: zipcode,
      lat,
      sqft_living_15: sqft_living15,
      sqft_lot_15: sqft_lot15,
    } = values;
    predict(
      {
        bedrooms,
        bathrooms,
        sqft_living,
        sqft_lot,
        floors,
        waterfront: waterfront ? 1 : 0,
        view: view!,
        condtion: condtion!,
        grade: grade!,
        sqft_above,
        sqft_basement,
        yr_built,
        yr_renovated,
        zipcode,
        lat,
        sqft_living15,
        sqft_lot15,
      },
      {
        onError() {
          showError(t("pages.add-edit-property.predict.failed"));
        },
      }
    );
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box display={"flex"} alignItems={"center"} gap={1} flexWrap={"wrap"}>
          <Typography>{t("pages.add-edit-property.predict.title")}</Typography>
          <Typography>
            {isLoading ? (
              <Skeleton />
            ) : isError ? (
              <IconButton onClick={handlePredict}>
                <RePredictIcon />
              </IconButton>
            ) : (
              data?.prediction
            )}
          </Typography>
          <button
            ref={predictButtonRef}
            type="button"
            style={{ display: "none" }}
            onClick={handlePredict}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name="price"
          type="number"
          label={t("common.property.price")}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PriceChangeIcon color="primary" />
              </InputAdornment>
            ),
          }}
          fullWidth
          value={values.price}
          onBlur={() => setFieldTouched("price", true)}
          error={!!(touched.price && errors.price)}
          helperText={!!(touched.price && errors.price) && errors.price}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <PropertyImageField />
      </Grid>
    </Grid>
  );
};

export default PriceStep;
