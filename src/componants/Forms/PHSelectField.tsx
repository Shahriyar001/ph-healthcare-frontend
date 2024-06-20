import { SxProps, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface ITextField {
  name: string;
  size: "small" | "Medium";
  placeholder?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
  items: string[];
}

const PHSelectField = ({
  items,
  name,
  label,
  size = "small",
  required,
  fullWidth = true,
  sx: ITextField,
}) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] === undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          sx={{ ...sx }}
          label={label}
          type={type}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
          placeholder={label}
          required={required}
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default PHSelectField;
