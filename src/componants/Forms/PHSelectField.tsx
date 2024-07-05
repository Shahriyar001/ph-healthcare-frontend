// import { MenuItem, SxProps, TextField } from "@mui/material";
// import React from "react";
// import { Controller, useFormContext } from "react-hook-form";

// interface ITextField {
//   name: string;
//   size: "small" | "Medium";
//   placeholder?: string;
//   label?: string;
//   required?: boolean;
//   fullWidth?: boolean;
//   sx?: SxProps;
//   items: string[];
// }

// const PHSelectField = ({
//   items,
//   name,
//   label,
//   size = "small",
//   required,
//   fullWidth = true,
//   // sx: ITextField,
//   sx: ITextField,
//   sx: ITextField,  // <-- Problematic line
// }) => {
//   const { control, formState } = useFormContext();
//   const isError = formState.errors[name] === undefined;
//   return (
//     <Controller
//       control={control}
//       name={name}
//       render={({ field }) => (
//         // <TextField
//         //   {...field}
//         //   sx={{ ...sx }}
//         //   label={label}
//         //   // type={type}
//         //   variant="outlined"
//         //   size={size}
//         //   select
//         //   fullWidth={fullWidth}
//         //   placeholder={label}
//         //   required={required}
//         //   error={!!error?.message}
//         //   helperText={error?.message}
//         // />
//         <TextField
//           {...field}
//           sx={{
//             ...sx,
//           }}
//           size={size}
//           select
//           label={label}
//           required={required}
//           fullWidth={fullWidth}
//           error={isError}
//           helperText={
//             isError ? (formState.errors[name]?.message as string) : ""
//           }
//         >
//           {items.map((name) => (
//             <MenuItem key={name} value={name}>
//               {name}
//             </MenuItem>
//           ))}
//         </TextField>
//       )}
//     />
//   );
// };

// export default PHSelectField;

import { MenuItem, SxProps, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface ITextField {
  name: string;
  size?: "small" | "medium";
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
  sx,
}: ITextField) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          sx={{
            ...sx,
          }}
          size={size}
          select
          label={label}
          required={required}
          fullWidth={fullWidth}
          error={isError}
          helperText={
            isError ? (formState.errors[name]?.message as string) : ""
          }
        >
          {items.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default PHSelectField;
