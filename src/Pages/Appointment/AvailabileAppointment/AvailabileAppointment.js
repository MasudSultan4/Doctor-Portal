import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        price: 25,
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        price: 20,
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        price: 10,
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 AM',
        price: 30,
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 AM - 07.00 AM',
        price: 34,
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 AM - 08.00 AM',
        price: 50,
        space: 10,
    },
]

const AvailabileAppointment = ({ date }) => {
    const [bookingSuccess,setBookingSuccess] = useState(false);

    return (
        <Container>
            <Typography variant="h4" sx={{color: 'info.main' ,fontWeight:400,mb:5}} >availabile Appointment {date.toDateString()}
            </Typography>
            {bookingSuccess && <Alert severity="success">Booking successfully!</Alert>}
            <Grid container spacing={2}>
               {
                   bookings.map(booking => <Booking date={date} setBookingSuccess={setBookingSuccess} key={booking.id} booking={booking}></Booking>)
               }
            </Grid>
        </Container>
    );
};

export default AvailabileAppointment;