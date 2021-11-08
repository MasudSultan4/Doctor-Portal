import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';

const bg = 'https://i.ibb.co/9c8khhC/bg.png'
const bannerBg = {
    background:`url(${bg})`,
  
}

const verticalCenter = {
    display:'flex',
    alignItems:'center',
    height:400
}

const Banner = () => {
    return (
        <Container style={bannerBg}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid style={{...verticalCenter,textAlign:"left"}} item xs={12} md={5}>
                       <Box>
                       <Typography variant="h4">
                            Your New Smile<br />
                            starts Here
                        </Typography>
                        <Typography  variant="h6" sx={{my:3, fontSize: '14', fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatem incidunt fugiat ducimus dolore aspernatur repellendus? Perspiciatis voluptas tempora veniam.
                        </Typography>
                        <Button variant="contained">Get Appointment</Button>
                       </Box>
                    </Grid>
                    <Grid style={verticalCenter} item xs={12} md={7}>
                        <img style={{ width: '300px' }} src={'https://i.ibb.co/jrzTzfS/chair.png'} alt="" />
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
};

export default Banner;