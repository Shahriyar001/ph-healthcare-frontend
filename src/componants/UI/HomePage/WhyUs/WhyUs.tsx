import assets from "@/assets";
import { Box, Container, Grid, Typography } from "@mui/material";
import chooseUsImg from "@/assets/choose-us.png";
import Image from "next/image";

const WhyUs = () => {
  const servicesData = [
    {
      imageSrc: assets.svgs.award,
      title: "Award Winning Service",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
      imageSrc: assets.svgs.award,
      title: "Best Quality Pregnancy Care",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
      imageSrc: assets.svgs.award,
      title: "Complete Medical Equipments",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
      imageSrc: assets.svgs.award,
      title: "Dedicated Emergency Care",
      description:
        "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
  ];

  return (
    <Container>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" fontWeight={600}>
            Why Us
          </Typography>
          <Typography component="p" fontWeight={300} fontSize={18}>
            Why Choose Us
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Box>
              <Box>
                <Image
                  src={servicesData[0].imageSrc}
                  width={80}
                  alt="award"
                ></Image>
              </Box>
              <Box>
                <Typography component="h6" variant="h6" fontWeight={600}>
                  {servicesData[0].title}
                </Typography>
                <Typography
                  color="primary.body1"
                  variant="body2"
                  fontWeight={600}
                >
                  {servicesData[0].description}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Image src={chooseUsImg} alt="choose us img" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyUs;
