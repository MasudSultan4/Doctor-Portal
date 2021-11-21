import { Grid } from '@mui/material';
import * as React from 'react';
import Calendar from '../../../Sheard/Calendar/Calander';
import Appointments from '../Appointments/Appointments';


const DashBoardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Calendar
                            date={date}
                            setDate={setDate}
                        ></Calendar>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Appointments date={date}></Appointments>
                    </Grid>

                </Grid>
    );
};

export default DashBoardHome;