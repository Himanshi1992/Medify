import { Box, Stack, Container, Grid, Typography } from "@mui/material";
import blog from "../../assets/blog.png";
import person from "../../assets/person.png";

function BlogCard() {
        return (
        <Box border='1px solid rgba(0,0,0,0.1)' borderRadius={2}>
            <Box
                component='img'
                src={blog}
                width={1}
            />
            <Box p={2} textAlign={"left"}>
                <Typography color='#77829D' fontWeight={500} mb={1} fontSize={{ xs: 12, md: 16 }}>
                    Medical | March 31, 2022
                </Typography>
                <Typography component='h3' color='#1B3C74' fontSize={{ xs: 14, md: 18 }} fontWeight={500} lineHeight={1.2} mb={2}>
                    6 Tips To Protect Your Mental Health When You're Sick
                </Typography>
                <Stack direction='row' spacing={1} alignItems='center'>
                    <Box
                        component='img'
                        src={person}
                        height={32}
                        width={32}
                    />
                    <Typography color='#1B3C74' fontSize={{ xs: 12, md: 16 }}>
                        Rebecca Lee
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
}

function Blogs() {
    return (
        <Box py={6}>
            <Container maxWidth='xl'>
                <Typography color='primary.main' fontWeight={600} textAlign='center'>
                    Blog & News
                </Typography>
                <Typography textAlign='center' variant='h2' mb={2}>
                    Read Our Latest News
                </Typography>
                <Grid container spacing={4} maxWidth="100%">
                    <Grid item xs={12} md={4}>
                        <BlogCard />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BlogCard />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BlogCard />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
export default Blogs;