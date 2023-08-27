import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, Formik, FormikHelpers } from "formik";
import { AddPropertyValues } from "./type";
import { string, number, boolean, object, array } from "yup";
import ResponsiveStepper from "@/components/pages/addProperty/responsiveStepper";
import LoadingButton from "@/components/other/loadingButton/LoadingButton";
import { useAddProperty } from "@/api/property/queries";
import { showError, showSuccess } from "@/libs/reactToastify";
import { useNavigate } from "react-router-dom";

const AddEditProperty = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { mutate: addProperty } = useAddProperty();
  const reqOneNumber = number()
    .required(t("form-validation.required"))
    .min(1, t("form-validation.min-to", { number: 1 }));
  const reqZeroNumber = number()
    .required(t("form-validation.required"))
    .min(0, t("form-validation.min-to", { number: 0 }));
  const reqString = string().required(t("form-validation.required"));
  const reqSelectObject = object()
    .shape({
      id: reqString,
      label: reqString,
    })
    .required(t("form-validation.required"));
  const validationSchema = [
    object().shape({
      name: reqString.min(3, t("form-validation.min-to", { number: 3 })),
      city: reqSelectObject,
      region: reqSelectObject,
      propertyType: reqSelectObject,
      furnish: reqSelectObject,
      cladding: reqSelectObject,
      detail: reqString,
      address: reqString,
      features: array()
        .of(reqSelectObject)
        .test("length", (features) => features?.length! > 0),
      water_front: boolean(),
    }),
    object().shape({
      bed_rooms: reqOneNumber,
      bath_rooms: reqOneNumber,
      kitchens: reqOneNumber,
      floors: reqOneNumber,
      floor_level: reqOneNumber,
    }),
    object().shape({
      sqft_living: reqZeroNumber,
      sqft_living_15: reqZeroNumber,
      sqft_lot: reqZeroNumber,
      sqft_lot_15: reqZeroNumber,
      sqft_above: reqZeroNumber,
      sqft_basement: reqZeroNumber,
    }),
    object().shape({
      view: reqZeroNumber,
      condition: reqZeroNumber,
      grade: reqZeroNumber,
      yr_built: reqString,
      yr_renovated: reqString,
    }),
    object().shape({
      zip_code: reqString,
      lat: reqString,
      long: reqString,
      north: boolean(),
      south: boolean(),
      east: boolean(),
      west: boolean(),
    }),
    object().shape({
      images: array()
        .of(reqString)
        .test("length", (images) => images?.length! > 0),
      price: reqZeroNumber,
    }),
  ];
  const addPropertyValues: AddPropertyValues = {
    name: "",
    city: null,
    propertyType: null,
    region: null,
    furnish: null,
    address: "",
    detail: "",
    cladding: null,
    features: [],
    water_front: false,
    images: [],
    bed_rooms: 0,
    bath_rooms: 0,
    kitchens: 0,
    floors: 0,
    floor_level: 0,
    sqft_living: 0,
    sqft_living_15: 0,
    sqft_lot: 0,
    sqft_lot_15: 0,
    sqft_above: 0,
    sqft_basement: 0,
    view: null,
    condition: null,
    grade: null,
    yr_built: "",
    yr_renovated: "",
    zip_code: "",
    lat: "",
    long: "",
    north: false,
    south: false,
    east: false,
    west: false,
    price: 0,
  };

  const handleAddProperty = (
    values: AddPropertyValues,
    helpers: FormikHelpers<AddPropertyValues>
  ) => {
    const {
      name,
      city,
      propertyType,
      region,
      furnish,
      address,
      detail,
      cladding,
      features,
      water_front,
      images,
      bed_rooms,
      bath_rooms,
      kitchens,
      floors,
      floor_level,
      sqft_living,
      sqft_living_15,
      sqft_lot,
      sqft_lot_15,
      sqft_above,
      sqft_basement,
      view,
      condition,
      grade,
      yr_built,
      yr_renovated,
      zip_code,
      lat,
      long,
      north,
      south,
      east,
      west,
      price,
    } = values;
    addProperty(
      {
        name,
        city_id: city?.id!,
        type_id: propertyType?.id!,
        region_id: region?.id!,
        furnish_id: furnish?.id!,
        address,
        detail,
        cladding_id: cladding?.id!,
        feature_ids: features.map((feature) => feature.id),
        water_front,
        images,
        bed_rooms,
        bath_rooms,
        kitchens,
        floors,
        floor_level,
        sqft_living,
        sqft_living_15,
        sqft_lot,
        sqft_lot_15,
        sqft_above,
        sqft_basement,
        view: view!,
        condition: condition!,
        grade: grade!,
        yr_built,
        yr_renovated,
        zip_code,
        lat,
        long,
        north,
        south,
        east,
        west,
        price,
      },
      {
        onSuccess() {
          showSuccess(t("pages.add-edit-property.add-successfully"));
          navigate(-1);
        },
        onError() {
          showError(t("pages.add-edit-property.failed"));
          helpers.setSubmitting(false);
        },
      }
    );
  };
  return (
    <Formik
      initialValues={addPropertyValues}
      validationSchema={validationSchema[activeStep]}
      onSubmit={handleAddProperty}
    >
      {({ errors }) => {
        console.log(errors);

        return (
          <Form>
            <ResponsiveStepper
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddEditProperty;
