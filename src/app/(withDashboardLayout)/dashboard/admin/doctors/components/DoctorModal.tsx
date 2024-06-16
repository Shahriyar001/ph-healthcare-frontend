import PHForm from "@/componants/Forms/PHForm";
import PHInput from "@/componants/Forms/PHInput";
import PHFullScreenModal from "@/componants/Shared/PHModal/PHFullScreenModal";
import { Password } from "@mui/icons-material";
import { Grid, TabProps } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

const DoctorModal = ({ open, setOpen }: TabProps) => {
  const onSubmit = async (values: FieldValues) => {
    try {
    } catch (err: any) {
      console.error(err);
    }
  };
  const defaultValues = {
    doctor: {
      email: "",
      name: "",
      contactNumber: "",
      address: "",
      registrationNumber: "",
      gender: "",
      experience: "",
      qualification: "",
      apointmentFee: "",
      currentWorkingPlace: "",
      designation: "",
      profilePhoto: "",
    },
    Password: "",
  };
  return (
    <PHFullScreenModal open={open} setOpen={setOpen} title="Create New Doctor">
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.name"
              label="name"
              fullWidth={true}
              sx={{ mx: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.email"
              label="email"
              type="email"
              fullWidth={true}
              sx={{ mx: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="password"
              label="Password"
              type="password"
              fullWidth={true}
              sx={{ mx: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.contactNumber"
              label="Contact Number"
              //   type="number"
              fullWidth={true}
              sx={{ mx: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.address"
              label="Address"
              fullWidth={true}
              sx={{ mx: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.registrationNumber"
              label="Registration Number"
              fullWidth={true}
              sx={{ mx: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.experience"
              label="Experience"
              type="number"
              fullWidth={true}
              sx={{ mx: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.gender"
              label="Gender"
              items={Gender}
              fullWidth={true}
              sx={{ mx: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.apointmentFee"
              label="ApointmentFee"
              type="number"
              fullWidth={true}
              sx={{ mx: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.qualification"
              label="Qualification"
              fullWidth={true}
              sx={{ mx: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.currentWorkingPlace"
              label="Current Working Place"
              fullWidth={true}
              sx={{ mx: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.designation"
              label="Designation"
              fullWidth={true}
              sx={{ mx: 2 }}
            />
          </Grid>
        </Grid>
      </PHForm>
    </PHFullScreenModal>
  );
};

export default DoctorModal;
