import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useField } from "formik";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { SelectObject } from "@/type";

export interface ISelectFiled {
  <FormikKeys extends string>({
    name,
    options,
    label,
  }: {
    name: FormikKeys;
    options: SelectObject[];
    label: string;
  }): ReactElement;
}
const SelectFiled: ISelectFiled = ({ name, options, label }) => {
  const { t } = useTranslation();
  const [field, meta, helper] = useField(name);
  return (
    <FormControl fullWidth>
      <InputLabel
        id="select-filed-id"
        color={!!(meta.touched && meta.error) ? "error" : "primary"}
      >
        {t(label)}
      </InputLabel>
      <Select
        labelId={"select-filed-id"}
        label={t(label)}
        value={field.value}
        onChange={(e) => helper.setValue(e.target.value)}
        onBlur={() => helper.setTouched(true)}
        error={!!(meta.touched && meta.error)}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {t(option.label)}
          </MenuItem>
        ))}
      </Select>
      {meta.touched && meta.error && (
        <FormHelperText sx={{ color: (theme) => theme.palette.error.main }}>
          {meta.error}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default SelectFiled;
