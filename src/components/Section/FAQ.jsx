import * as React from 'react';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Box, Container, Grid, Typography } from "@mui/material";
import FAQ from "../../assets/FAQ.jpg";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    '&::before': {
         display: 'none',
    },
    '&:not(:last-child)': {
        marginBottom: 24,
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<AddIcon sx={{ color: 'primary.main' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: false,
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(45deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: 0,
    },
    padding: 0,
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: 0,
}));

function CustomizedAccordions({ data }) {
    const [expanded, setExpanded] = React.useState('');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false); };

    return (
        <div>
            {data.map((item, index) => (
                <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                    <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
                        <Typography fontSize={18} fontWeight={700} color='#1B3C74' lineHeight={1.2}>
                            {item.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            fontSize={14} >
                            {item.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}

function FAQSection() {
    const faqs = [
        {
            question: 'Why choose our medical for your family?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'Why we are different from others?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'Trusted & experience senior care & love',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        },
        {
            question: 'How to get appointment for emergency cases?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
        }
    ]
  return (
    <Box py={4}>
         <Container maxWidth='xl'>
            <Typography color='primary.main' fontWeight={600} textAlign='center'>
                Get Your Answer
            </Typography>
            <Typography textAlign='center' variant='h2' mb={2}>
                Frequently Asked Questions
            </Typography>
            <Grid container alignItems='center' spacing={5}>
                <Grid item xs={12} md={6}>
                    <Box src={FAQ} component='img' width={500} height='auto' />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box maxWidth={450}><CustomizedAccordions data={faqs} /></Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
  );
}
export default FAQSection;