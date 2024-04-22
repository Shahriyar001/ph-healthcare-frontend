import HeroSection from "@/componants/UI/HomePage/HeroSection/HeroSection";
import Specialist from "@/componants/UI/HomePage/Specialist/Specialist";
import TopRatedDoctors from "@/componants/UI/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/componants/UI/HomePage/WhyUs/WhyUs";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
      <WhyUs />
    </>
  );
};

export default HomePage;
