import { HTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import { useFormikContext } from "formik";
import {
  FilterOptionsState,
  TextField,
  Autocomplete,
  createFilterOptions,
} from "@mui/material";
import { showError } from "@/libs/reactToastify";
import {
  useAddFeatureMutation,
  useGetFeaturesQuery,
} from "@/api/property/queries";
import { AddPropertyValues } from "@/pages/addEditProperty/type";
import { AutocompleteObject } from "@/type";
export type FeatureSelectObject = AutocompleteObject & {
  newFeatureLabel?: string;
};
const filter = createFilterOptions<FeatureSelectObject>();
const FeaturesAutocomplete = () => {
  const { t } = useTranslation();
  const { values, errors, touched, setFieldTouched, setFieldValue } =
    useFormikContext<AddPropertyValues>();
  const { data: features, isLoading: isFeaturesLoading } =
    useGetFeaturesQuery();
  const { mutate: addFeature } = useAddFeatureMutation();

  const handleChange = (e: any, features: AutocompleteObject[]) => {
    const isNewFeature = features.findIndex((feature) => feature.id === "-1");
    if (isNewFeature !== -1) {
      const newFeature = features[isNewFeature];
      addFeature(
        { name: newFeature.label },
        {
          onSuccess(data) {
            features.splice(isNewFeature, 1);
            setFieldValue("features", [...features, data.data.feature]);
          },
          onError() {
            showError(t("pages.add-edit-property.failed-to-add-new-feature"));
            features.splice(isNewFeature, 1);
            setFieldValue("features", features);
          },
        }
      );
    }
    setFieldValue("features", features);
  };
  const renderOption = (
    props: HTMLAttributes<HTMLLIElement>,
    option: FeatureSelectObject
  ) => (
    <li {...props}>
      {option?.newFeatureLabel
        ? `${t("pages.add-edit-property.add")} ${option.newFeatureLabel}`
        : option.label}
    </li>
  );
  const filterOptions = (
    options: FeatureSelectObject[],
    params: FilterOptionsState<FeatureSelectObject>
  ) => {
    const filtered = filter(options, params);
    const { inputValue } = params;
    const isExisting = options.some((option) => inputValue === option.label);
    if (inputValue !== "" && !isExisting) {
      filtered.push({
        id: "-1",
        label: inputValue,
        newFeatureLabel: inputValue,
      });
    }

    return filtered;
  };

  return (
    <Autocomplete
      value={values.features}
      multiple
      loading={isFeaturesLoading}
      onChange={handleChange}
      renderOption={renderOption}
      filterOptions={filterOptions}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      options={features?.data.features ?? []}
      renderInput={(params: any) => (
        <TextField
          {...params}
          name="features"
          label={t("common.property.features")}
          fullWidth
          onBlur={() => setFieldTouched("features", true)}
          error={!!(touched.features && errors.features)}
          helperText={
            touched.features && errors.features ? errors.features : ""
          }
        />
      )}
    />
  );
};

export default FeaturesAutocomplete;
