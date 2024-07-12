import PHDatePicker from "@/componants/Forms/PHDatePicker";
import PHForm from "@/componants/Forms/PHForm";
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
        </Grid>
        <Button type="submit">Create</Button>
      </PHForm>
    </PHModal>
  );
};

export default ScheduleModal;
