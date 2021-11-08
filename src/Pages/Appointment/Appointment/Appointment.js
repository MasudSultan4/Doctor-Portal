import React from 'react';
import Navigation from '../../../Sheard/Navigition/Navigation';
import AvailabileAppointment from '../AvailabileAppointment/AvailabileAppointment';
import AppointmentHeader from './../AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailabileAppointment date={date}></AvailabileAppointment>
        </div>
    );
};

export default Appointment;