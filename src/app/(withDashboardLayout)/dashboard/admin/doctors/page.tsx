"use client";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
// import DoctorModal from "./components/DoctorModal";
import { useState } from "react";
import DoctorModal from "./components/DoctorModal";
import { useGetAllDoctorsQuery } from "@/redux/api/doctorApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

const DoctorsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");
  // console.log(searchTerm);

  query["searchTerm"] = searchTerm;

  const { data, isLoading } = useGetAllDoctorsQuery({ ...query });
  // console.log(data);
  const doctors = data?.doctors;
  const meta = data?.meta;
  // console.log(doctors);

  const handleDelete = async (id: string) => {
    try {
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contactNumber", headerName: "Contact Number", flex: 1 },

    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>Create New Doctor</Button>
        <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="search doctor"
        />
      </Stack>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={doctors} columns={columns} />
        </Box>
      ) : (
        <h1>Loading...</h1>
      )}
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
