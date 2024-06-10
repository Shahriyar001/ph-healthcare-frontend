import PHModal from "@/componants/Shared/PHModal/PHModal";
import { TextField } from "@mui/material";

type Tprops = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialistModal = ({ open, setOpen }: Tprops) => {
  return (
    <PHModal open={open} setOpen={setOpen} title="Create Specialist">
      <TextField />
    </PHModal>
  );
};

export default SpecialistModal;
