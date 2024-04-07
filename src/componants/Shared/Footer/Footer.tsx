import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34) py-5">
      <Container>
        <Stack direction="row" justifyContent="center" gap={4}>
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff">Health Plans</Typography>
          <Typography color="#fff">Medicine</Typography>
          <Typography color="#fff">Diognostics</Typography>
          <Typography color="#fff">NGOs</Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
