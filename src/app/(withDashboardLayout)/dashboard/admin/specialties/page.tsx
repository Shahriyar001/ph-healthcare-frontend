"use client";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import SpecialistModal from "./components/SpecialistModal";
import { useState } from "react";
import { useGetaAllSpecialtiesQuery } from "@/redux/api/specialitiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetaAllSpecialtiesQuery({});
  // console.log(data);

  const handleDelete = (id: string) => {
    console.log(id);
  };

  const columns: GridColDef[] = [
    { field: "title", headerName: "title", width: 300 },
    {
      field: "icon",
      headerName: "Icon",
      width: 300,
      renderCell: ({ row }) => {
        return (
          <Box>
            {/* <Image
              src={row?.icon}
              width={20}
              height={20}
              alt="icon"
            /> */}{" "}
            <h1>Icon</h1>
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 400,
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
        <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
        <SpecialistModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Specialist" />
      </Stack>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid rows={data} columns={columns} />
        </Box>
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  );
};

export default SpecialtiesPage;
