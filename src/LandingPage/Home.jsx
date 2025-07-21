import { Container, Box, Stack } from "@mui/material";
import Blogs from "../components/Section/Blogs";
import OurFamily from "../components/Section/OurFamily";
import FAQSection from "../components/Section/FAQ";
import PatientCaring from "../components/Section/PatientCaring";
import Specialists from "../components/Section/Specialists";
import Specialization from "../components/Section/Specialization";
import Offers from "../components/Section/Offers";
import IconBox from "../components/Section/IconBox";
import SearchHospital from "../components/SearchHospital";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";

function Home() {
return (
<Box>
    <Box
        sx={{
          background:
            "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
        }}
        mb={4}
    > 
      <NavBar />
        <Container maxWidth="xl">
          <Slider />
          <Stack
                p={{ xs: 2.5, md: 8 }}
                mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
                position="relative"
                zIndex={99}
                bgcolor="#fff"
                borderRadius="15px"
                spacing={10}
                boxShadow="0 0 12px rgba(0,0,0,0.1)"
            >
                <SearchHospital />
                <IconBox />
            </Stack>
        </Container>
    </Box>    
    <Offers />
    <Specialization />
    <Specialists />
    <PatientCaring />
    <Blogs />
    <OurFamily />
    <FAQSection />
  </Box>
);
}
export default Home;
