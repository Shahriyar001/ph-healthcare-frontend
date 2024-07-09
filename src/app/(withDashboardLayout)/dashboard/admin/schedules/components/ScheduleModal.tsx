import PHDatePicker from "@/componants/Forms/PHDatePicker";
import PHForm from "@/componants/Forms/PHForm";
import PHModal from "@/componants/Shared/PHModal/PHModal";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

const ScheduleModal = ({ open, setOpen }) => {
  const handleFromSubmit = async (value: FieldValues) => {
    try {
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <PHModal open={open} setOpen={setOpen} title="Create Schedule">
      <PHForm onSubmit={handleFromSubmit}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <PHDatePicker name="startDate" />
          </Grid>
        </Grid>
        <Button type="submit">Create</Button>
      </PHForm>
    </PHModal>
  );
};

export default ScheduleModal;
