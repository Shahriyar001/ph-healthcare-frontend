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
        <Grid container spacing={2} my={5}>
          <Grid item md={6}>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245,245,245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: " 10px 10px 100px 10px",
              }}
            >
              <Box
                sx={{
                  background: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[0].imageSrc}
                  width={50}
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
                  fontWeight={300}
                >
                  {servicesData[0].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245,245,245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: " 10px 100px 10px 10px",
                margin: "20px 0px",
              }}
            >
              <Box
                sx={{
                  background: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[1].imageSrc}
                  width={50}
                  alt="award"
                ></Image>
              </Box>
              <Box>
                <Typography component="h6" variant="h6" fontWeight={600}>
                  {servicesData[1].title}
                </Typography>
                <Typography
                  color="primary.body1"
                  variant="body2"
                  fontWeight={300}
                >
                  {servicesData[1].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245,245,245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: " 10px 10px 100px 10px",
              }}
            >
              <Box
                sx={{
                  background: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[2].imageSrc}
                  width={50}
                  alt="award"
                ></Image>
              </Box>
              <Box>
                <Typography component="h6" variant="h6" fontWeight={600}>
                  {servicesData[2].title}
                </Typography>
                <Typography
                  color="primary.body1"
                  variant="body2"
                  fontWeight={300}
                >
                  {servicesData[2].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245,245,245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: " 10px 100px 10px 10px",
                marginTop: "20px",
              }}
            >
              <Box
                sx={{
                  background: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={servicesData[3].imageSrc}
                  width={50}
                  alt="award"
                ></Image>
              </Box>
              <Box>
                <Typography component="h6" variant="h6" fontWeight={600}>
                  {servicesData[3].title}
                </Typography>
                <Typography
                  color="primary.body1"
                  variant="body2"
                  fontWeight={300}
                >
                  {servicesData[3].description}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                margin: " 0 auto",
                justifyContent: "center",
              }}
            >
              <Image src={chooseUsImg} width={400} alt="choose us img" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyUs;
