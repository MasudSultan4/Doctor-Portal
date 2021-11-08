import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import useAuth from './../../../Hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date,setBookingSuccess }) => {
    const { name, time } = booking;
    const { user } = useAuth();

    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo)
    const handleOnBlur = e => {
        const filed = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo }
        newInfo[filed] = value;
        setBookingInfo(newInfo)
    }
    const handleBookingSubmit = e => {
        //    collect data 
        const appointment = {
            ...bookingInfo,
            serviceName: name,
            time,
            date: date.toLocaleDateString()
        }
        console.log(appointment)

        fetch('http://localhost:4000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    setBookingSuccess(true)
                    handleBookingClose()
                }
            })

     
        e.preventDefault()
    }

    return (

        <Modal
            open={openBooking}
            onClose={handleBookingClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            disabled
                            id="outline-size-small"
                            sx={{ width: '90%', m: 1 }}
                            defaultValue={time}
                            size="small"
                        />
                        <TextField

                            id="outline-size-small"
                            sx={{ width: '90%', m: 1 }}
                            name="patientName"
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField

                            id="outline-size-small"
                            sx={{ width: '90%', m: 1 }}
                            name="email"
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField

                            id="outline-size-small"
                            sx={{ width: '90%', m: 1 }}
                            name="phone"
                            defaultValue="phone "
                            size="small"
                        />
                        <TextField
                            disabled
                            id="outline-size-small"
                            sx={{ width: '90%', m: 1 }}
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <Button type="submit" variant="outlined">Submit</Button>
                    </form>
                </Typography>
            </Box>
        </Modal>
    );
};

export default BookingModal;