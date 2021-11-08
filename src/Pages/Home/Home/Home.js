import React from 'react';
import Navigation from '../../../Sheard/Navigition/Navigation';
import AppointmentBanner from '../AppoinmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
           <Banner></Banner>
           <Services></Services>
           <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;