import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

const bg = 'https://i.ibb.co/fCLhbNh/appointment-bg.png'

const appointmentBg = {
    background: `url(${bg})`,
    marginTop: 170,
    backgroundColor:'rgba(65,72,92,0.9)',
    backgroundBlendMode:'darken,luminosity'
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{width:400,marginTop:-110}}
                    src="https://i.ibb.co/9vRtC5y/doctor.png" alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display:'flex',
                    justifyContent:'flex-start',
                    alignItems:'center',
                    textAlign:'left'
                }}>
                    <Box>
                    <Typography style={{color:'#5DE6EE'}} variant="h6">
                        Appointment
                    </Typography>
                    <Typography sx={{mt:5,mb:3}} style={{color:"white",fontWeight:'500' }} variant="h4">
                        Make an appointment Today
                    </Typography>
                    <Typography style={{color:"white",fontWeight:'300',fontSize:"14"}} sx={{mb:3}} variant="h6">
                    typically used for less-pronounced actions, including those located: in dialogs, in cards.
                    </Typography>
                    <Button variant="contained"  sx={{}}>Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppointmentBanner;