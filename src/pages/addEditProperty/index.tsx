import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, Formik, FormikHelpers } from "formik";
import { AddPropertyValues } from "./type";
import { string, number, boolean, object, array } from "yup";
import ResponsiveStepper from "@/components/pages/addProperty/responsiveStepper";
import {
  useAddPropertyMutation,
  useGetPropertyQuery,
  useUpdatePropertyMutation,
} from "@/api/property/queries";
import { showError, showSuccess } from "@/libs/reactToastify";
import { Params, useNavigate, useParams } from "react-router-dom";
import { CONTRACT_TYPE } from "@/type";
import { Image } from "@/api/user/type";

const AddEditProperty = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { propertyId } = useParams<Params>();
  const {
    data: property,
    isFetching,

    isError,
  } = useGetPropertyQuery({ propertyId });
  const { mutate: addProperty } = useAddPropertyMutation();
  const { mutate: updateProperty } = useUpdatePropertyMutation();
  const reqOneNumber = number()
    .required(t("form-validation.required"))
    .min(1, t("form-validation.min-to", { number: 1 }));
  const reqZeroNumber = number()
    .required(t("form-validation.required"))
    .min(0, t("form-validation.min-to", { number: 0 }));
  const reqNumber = number().required(t("form-validation.required"));
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
      contract_type: reqNumber,
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
  const addEditPropertyValues: AddPropertyValues = property
    ? {
        ...property.data.property,
        propertyType: property.data.property.type,
        bath_rooms: property.data.property.bath_room,
        cladding: null,
        water_front: property.data.property.water_front ? true : false,
        images: property.data.property.image.map((image) => image.media_url),
        old_images: property.data.property.image,
        images_delete_ids: [],
      }
    : {
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
        contract_type: CONTRACT_TYPE.SELL,
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
      city,
      propertyType,
      region,
      furnish,
      cladding,
      features,
      view,
      grade,
      condition,
      old_images,
      ...restValues
    } = values;
    console.log(values);
    const data = {
      city_id: city?.id!,
      type_id: propertyType?.id!,
      region_id: region?.id!,
      furnish_id: furnish?.id!,
      cladding_id: cladding?.id!,
      feature_ids: features.map((feature) => feature.id),
      view: view!,
      grade: grade!,
      condition: condition!,
      ...restValues,
    };
    propertyId
      ? updateProperty(
          { body: data, params: { id: propertyId } },
          {
            onSuccess() {
              showSuccess(
                t("pages.add-edit-property.updated-successfully", {
                  property: values.name,
                })
              );
              navigate(-1);
            },
            onError() {
              showError(
                t("pages.add-edit-property.failed-to-update", {
                  property: values.name,
                })
              );
              helpers.setSubmitting(false);
            },
          }
        )
      : addProperty(data, {
          onSuccess() {
            showSuccess(
              t("pages.add-edit-property.added-successfully", {
                property: values.name,
              })
            );
            navigate(-1);
          },
          onError() {
            showError(
              t("pages.add-edit-property.failed-to-add", {
                property: values.name,
              })
            );
            helpers.setSubmitting(false);
          },
        });
  };
  return (
    <Formik
      initialValues={addEditPropertyValues}
      validationSchema={validationSchema[activeStep]}
      onSubmit={handleAddProperty}
      enableReinitialize
    >
      {({ errors }) => {
        return (
          <Form>
            <ResponsiveStepper
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              isLoading={isFetching}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddEditProperty;
