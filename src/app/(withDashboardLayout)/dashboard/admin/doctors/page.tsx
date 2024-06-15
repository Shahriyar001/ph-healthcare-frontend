import { Box, Button, Stack, TextField } from "@mui/material";

const DoctorsPage = () => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button>Create New Doctor</Button>
        <TextField size="small" placeholder="search doctor" />
      </Stack>
    </Box>
  );
};

export default DoctorsPage;
