import { Container, Grid } from '@mui/material';
import React from 'react';
import Calendar from '../../../Sheard/Calendar/Calander';

const AppointmentHeader = ({date,setDate}) => {
    return (
      <Container>
           <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Calendar date={date} setDate={setDate}></Calendar>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={'https://i.ibb.co/jrzTzfS/chair.png'} style={{width:'100%'}} alt="" />
                </Grid>
           </Grid>
      </Container>
    );
};

export default AppointmentHeader;