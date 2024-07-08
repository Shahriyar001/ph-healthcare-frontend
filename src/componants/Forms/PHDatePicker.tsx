import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { SxProps, useFormControl } from "@mui/material";

interface IDatePicker {
  name: string;
  size?: "small" | "medium";
  label?: string;
  required: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
}

const PHDatePicker = ({
  name,
  size = "small",
  label,
  required,
  fullWidth = true,
  sx,
}: IDatePicker) => {
  const { control } = useFormControl();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={dayjs(new Date().toDateString())}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              {...field}
              onChange={(date) => onChange(onChange)}
              value={value || Date.now()}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default PHDatePicker;
