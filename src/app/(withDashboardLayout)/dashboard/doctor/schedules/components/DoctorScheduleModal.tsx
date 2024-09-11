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

  const { data, isLoading } = useGetAllSchedulesQuery(query);
  const schedules = data?.schedules;
  console.log(schedules);

  return (
    <PHModal open={open} setOpen={setOpen} title="Create Doctor Schedule">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Controlled picker"
          value={dayjs(selectedDate)}
          onChange={(newValue) =>
            setSeclectedDate(dayjs(newValue).toISOString())
          }
        />
      </LocalizationProvider>
      <MultipleSelectFieldChip schedules={schedules} />
    </PHModal>
  );
};

export default DoctorScheduleModal;
