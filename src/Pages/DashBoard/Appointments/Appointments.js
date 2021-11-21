import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';

const Appointments = ({date}) => {
    const {user,token} = useAuth();
    const [appointments,setAppointments] = useState([])
    useEffect(()=>{
        const url = `http://localhost:4000/appointments?email=${user.email}&date=${date}`
        fetch(url,{
          headers:{
            'authorization': `bearer ${token}`
          }
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[date])
    return (
        <div>
            <h1>This is Appointments: {appointments.length  } </h1>
            <TableContainer component={Paper}>
      <Table aria-label="Appointment table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Service</TableCell>
            <TableCell align="right">Action</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientName}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.serviceName}</TableCell>
              <TableCell align="right">{row.payment 
              ? 'Paid'
              : <Link to={`/dashboard/payment/${row._id}`}><Button>Pay</Button></Link> }</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Appointments;