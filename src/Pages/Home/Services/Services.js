import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import Service from '../Service/Service';





const Services = () => {
    const services = [
        {
            name: 'Fluoride Treatment',
            description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improhealth and reduce the risk of cavities. ",
            img: 'https://i.ibb.co/jfXSD3x/fluoride.png'
        },
        {
            name: 'Cavity Filling',
            description: "Fillings treat tooth decay, preventing further damage and tooth loss, as well as the possibility of pain and infection. A filling seals a hole, or cavity, in the tooth.Having a cavity filled may cause some discomfort, but it should not cause pain. ",
            img: 'https://i.ibb.co/p191FWP/cavity.png'
        },
        {
            name: 'Teeth Whitening',
            description: "Everyone notices a bright, white, glowing smile. And everyone notices how confident you feel when you have that beautiful smile. That’s why we utilize long-lasting Teeth Whitening procedure — because we want you to glow with pride and confidence.",
            img: 'https://i.ibb.co/FWY8LQB/whitening.png'
        }
    ]
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500,m: 2, color: 'primary.main'  }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600 }} variant="h4" component="div">
                    Services With Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service service={service} key={service.name}></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;