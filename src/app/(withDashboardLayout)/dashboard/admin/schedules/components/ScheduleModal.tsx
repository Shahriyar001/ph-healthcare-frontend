import PHDatePicker from "@/componants/Forms/PHDatePicker";
import PHForm from "@/componants/Forms/PHForm";
import PHTimePicker from "@/componants/Forms/PHTomePicker";
import PHModal from "@/componants/Shared/PHModal/PHModal";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

const ScheduleModal = ({ open, setOpen }) => {
  const handleFromSubmit = async (values: FieldValues) => {
    console.log(values);
    try {
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <PHModal open={open} setOpen={setOpen} title="Create Schedule">
      <PHForm onSubmit={handleFromSubmit}>
        <Grid container spacing={2} sx={{ width: "400px" }}>
          <Grid item md={12}>
            <PHDatePicker name="startDate" label="Start Date" />
          </Grid>
          <Grid item md={12}>
            <PHDatePicker name="endDate" label="End Date" />
          </Grid>
          <Grid item md={6}>
            <PHTimePicker name="startTime" label="Start Time" />
          </Grid>
          <Grid item md={6}>
            <PHTimePicker name="endTime" label="End Time" />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ mt: 1 }}>
          Create
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default ScheduleModal;
