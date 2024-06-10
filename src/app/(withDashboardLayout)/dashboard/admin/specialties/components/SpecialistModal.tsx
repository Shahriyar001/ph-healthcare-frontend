import PHFileUploader from "@/componants/Forms/PHFileUploader";
import PHForm from "@/componants/Forms/PHForm";
import PHInput from "@/componants/Forms/PHInput";
import PHModal from "@/componants/Shared/PHModal/PHModal";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";

type Tprops = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialistModal = ({ open, setOpen }: Tprops) => {
  const handleFormSubmit = (value: FieldValues) => {};

  return (
    <PHModal open={open} setOpen={setOpen} title="Create A New Specialist">
      <PHForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <PHInput name="title" label="Title" />
          </Grid>
          <Grid item md={6}>
            <PHFileUploader name="file" label="Upload File" />
          </Grid>
        </Grid>
        <Button sx={{ mt: 1 }} type="submit">
          Create
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default SpecialistModal;
