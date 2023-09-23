import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { SelectObject } from "@/type";

export interface Props<ValueType> {
  label: string;
  value: ValueType;
  options: SelectObject[];
  setValue: Dispatch<SetStateAction<ValueType>>;
}
function SelectFiled<ValueType>({
  label,
  value,
  options,
  setValue,
}: Props<ValueType>) {
  const { t } = useTranslation();

  return (
    <FormControl fullWidth>
      <InputLabel id="select-filed-id">{t(label)}</InputLabel>
      <Select
        labelId={"select-filed-id"}
        label={t(label)}
        value={value}
        onChange={(e) => setValue(e.target.value as ValueType)}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {t(option.label)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectFiled;
