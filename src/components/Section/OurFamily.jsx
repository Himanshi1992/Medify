import { Box, Container, Grid, Typography } from "@mui/material";
import banner from "../../assets/family-banner.png";

function OurFamily() {
  return (
    <Box pt={3} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
            <Container>
                <Grid container alignItems='center' spacing={{xs:4, md:10}}>
                    <Box maxWidth={500}>
                    <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} color="primary.main" textAlign={"left"}>
                            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
                        </Typography>
                        <Typography variant="h2" textAlign={"left"}> Our Families </Typography>
                        <Typography color='#77829D' lineHeight={1.8} textAlign={"left"}> 
                            We will work with you to develop individualised care plans, 
                            including management of chronic diseases. If we cannot assist,
                            we can provide referrals or advice about the type of practitioner 
                            you require. We treat all enquiries sensitively and in the strictest 
                            confidence. </Typography>
                    </Grid></Box>
                    <Grid item xs={12} md={6}>
                        <Box maxWidth={500} component='img' src={banner} sx={{ width: "100%", height: "auto", mx: "auto", display: "block" }}/>
                    </Grid>
                </Grid>
            </Container></Box> 
  );  
}
export default OurFamily;
