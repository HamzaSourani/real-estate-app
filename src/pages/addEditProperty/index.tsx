import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, Formik } from "formik";
import { AddPropertyValues } from "./type";
import { string, number, boolean, object, array } from "yup";
import ResponsiveStepper from "@/components/pages/addProperty/responsiveStepper";

const AddEditProperty = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useTranslation();
  const reqNumber = number()
    .required(t("form-validation.required"))
    .min(0, t("form-validation.min-to-zero"));
  const reqString = string().required(t("form-validation.required"));
  const reqSelectObject = object()
    .shape({
      id: reqString,
      label: reqString,
    })
    .required(t("form-validation.required"));
  const validationSchema = [
    object().shape({
      name: reqString,
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
      bed_rooms: reqNumber,
      bath_rooms: reqNumber,
      kitchens: reqNumber,
      floors: reqNumber,
      floor_level: reqNumber,
    }),
    object().shape({
      sqft_living: reqNumber,
      sqft_living_15: reqNumber,
      sqft_lot: reqNumber,
      sqft_lot_15: reqNumber,
      sqft_above: reqNumber,
      sqft_basement: reqNumber,
    }),
    object().shape({
      view: reqNumber.min(1),
      condition: reqNumber,
      grade: reqNumber,
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
        .of(
          object().shape({
            id: reqString,
            label: reqString,
          })
        )
        .test("length", (images) => images?.length! > 0),
      price: reqNumber,
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
    view: 0,
    condition: 0,
    grade: 0,
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

  return (
    <Formik
      initialValues={addPropertyValues}
      validationSchema={validationSchema[activeStep]}
      onSubmit={(values, formikHelper) => {
        console.log(values);
      }}
    >
      <Form>
        <ResponsiveStepper
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </Form>
    </Formik>
  );
};

export default AddEditProperty;
