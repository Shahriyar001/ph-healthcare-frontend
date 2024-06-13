import PHFileUploader from "@/componants/Forms/PHFileUploader";
import PHForm from "@/componants/Forms/PHForm";
import PHInput from "@/componants/Forms/PHInput";
import PHModal from "@/componants/Shared/PHModal/PHModal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialitiesApi";
import { modifyPayload } from "@/ulils/modifyPayload";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type Tprops = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialistModal = ({ open, setOpen }: Tprops) => {
  const [createSpecialty] = useCreateSpecialtyMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    console.log(values);
    const data = modifyPayload(values);
    try {
      const res = await createSpecialty(data).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("Specialty created successfully");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

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

// import PHFileUploader from "@/components/Forms/PHFileUploader";
// import PHForm from "@/components/Forms/PHForm";
// import PHInput from "@/components/Forms/PHInput";
// import PHModal from "@/components/Shared/PHModal/PHModal";
// import { useCreateSpecialtyMutation } from "@/redux/api/specialitiesApi";
// import { modifyPayload } from "@/utils/modifyPayload";
// import { Button, Grid } from "@mui/material";
// import { FieldValues } from "react-hook-form";

// type Tprops = {
//   open: boolean;
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
// };

// const SpecialistModal = ({ open, setOpen }: Tprops) => {
//   const [createSpecialty] = useCreateSpecialtyMutation();

//   const handleFormSubmit = async (values: FieldValues) => {
//     console.log(values);
//     const data = modifyPayload(values);
//     try {
//       const res = await createSpecialty(data);
//       console.log(res);
//     } catch (err: any) {
//       console.error(err.message);
//     }
//   };

//   return (
//     <PHModal open={open} setOpen={setOpen} title="Create A New Specialist">
//       <PHForm onSubmit={handleFormSubmit}>
//         <Grid container spacing={2}>
//           <Grid item md={6}>
//             <PHInput name="title" label="Title" />
//           </Grid>
//           <Grid item md={6}>
//             <PHFileUploader name="file" label="Upload File" />
//           </Grid>
//         </Grid>
//         <Button sx={{ mt: 1 }} type="submit">
//           Create
//         </Button>
//       </PHForm>
//     </PHModal>
//   );
// };

// export default SpecialistModal;
