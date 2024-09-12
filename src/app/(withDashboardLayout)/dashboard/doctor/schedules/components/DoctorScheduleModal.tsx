// import PHModal from "@/componants/Shared/PHModal/PHModal";
// import React, { useState } from "react";
// import dayjs, { Dayjs } from "dayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { TabProps } from "@mui/material";
// // import { Dayjs } from "dayjs";

// const DoctorScheduleModal = ({ open, setOpen }: TabProps) => {
//   const [selectedDate, setSeclectedDate] = useState(
//     dayjs(new Date()).toISOString()
//   );
//   return
//   <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker
//         label="Controlled picker"
//         value={dayjs(selectedDate)}
//         onChange={(newValue) => setSeclectedDate(dayjs(newValue).toISOString())}
//       />
//     </LocalizationProvider>
//   </PHModal>;

// };

// export default DoctorScheduleModal;

import PHModal from "@/componants/Shared/PHModal/PHModal";
import React, { useState } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useGetAllSchedulesQuery } from "@/redux/api/scheduleApi";
import MultipleSelectFieldChip from "./MultipleSelectFieldChip";
import { Stack } from "@mui/material";
// import LoadingButton from "@mui/lab/LoadingButton";
// import LoadingButton from "@mui/material/LoadingButton";
import LoadingButton from "@mui/lab/LoadingButton";
import { useCreateDoctorScheduleMutation } from "@/redux/api/doctorScheduleApi";

type DoctorScheduleModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorScheduleModal: React.FC<DoctorScheduleModalProps> = ({
  open,
  setOpen,
}) => {
  const [selectedDate, setSeclectedDate] = useState(
    dayjs(new Date()).toISOString()
  );

  const [selectedScheduleIds, setSelectedScheduleIds] = useState();
  console.log(selectedScheduleIds);

  const query: Record<string, any> = {};

  if (!!selectedDate) {
    query["startDate"] = dayjs(selectedDate)
      .hour(0)
      .minute(0)
      .millisecond(0)
      .toISOString();
    query["endDate"] = dayjs(selectedDate)
      .hour(23)
      .minute(59)
      .millisecond(999)
      .toISOString();
  }

  const { data } = useGetAllSchedulesQuery(query);
  const schedules = data?.schedules;
  const [createDoctorSchedule, { isLoading }] =
    useCreateDoctorScheduleMutation();
  console.log(schedules);

  const onSubmit = async () => {
    const res = await createDoctorSchedule({
      scheduleIds: selectedScheduleIds,
    });
    console.log(res);
    setOpen(false);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
      <Stack direction={"column"} gap={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Controlled picker"
            value={dayjs(selectedDate)}
            onChange={(newValue) =>
              setSeclectedDate(dayjs(newValue).toISOString())
            }
            sx={{ width: "100%" }}
          />
        </LocalizationProvider>
        <MultipleSelectFieldChip
          schedules={schedules}
          selectedScheduleIds={selectedScheduleIds}
          setSelectedScheduleIds={setSelectedScheduleIds}
        />

        <LoadingButton
          size="small"
          onClick={onSubmit}
          loading={isLoading}
          loadingIndicator="Submitting"
          variant="contained"
        >
          Fetch data
        </LoadingButton>
      </Stack>
    </PHModal>
  );
};

export default DoctorScheduleModal;
