"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
// import DoctorModal from "./components/DoctorModal";
import { useState } from "react";
import DoctorModal from "./components/DoctorModal";

const DoctorsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create New Doctor</Button>
        <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="search doctor" />
      </Stack>
    </Box>
  );
};

export default DoctorsPage;

// Import necessary dependencies
// `use client`;
// "use client";

// import { Box, Button, Stack, TextField } from "@mui/material";
// import { useState } from "react";
// import DoctorModal from "./components/DoctorModal";
// // import { useClient } from "next/data-client";
// // import { useClient } from "next/data-client";
// // Import useClient from next/data-client

// // Define the DoctorsPage component
// const DoctorsPage = () => {
//   // Define state for modal open/close
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//   return (
//     <Box>
//       {/* Stack for layout */}
//       <Stack direction="row" justifyContent="space-between" alignItems="center">
//         {/* Button to open modal */}
//         <Button onClick={() => setIsModalOpen(true)}>Create New Doctor</Button>
//         {/* DoctorModal component */}
//         <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
//         {/* Search TextField */}
//         <TextField size="small" placeholder="Search doctor" />
//       </Stack>
//     </Box>
//   );
// };

// // Export the component wrapped with useClient
// export default DoctorsPage;
