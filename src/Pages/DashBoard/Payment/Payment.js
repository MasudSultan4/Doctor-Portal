import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './ChackOut';

const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});
  const stripePromise = loadStripe(
    'pk_test_51JxBb4L8mpHmsQSxE8LN5M7QG10FOZk2g8lCF9IffebqF3Az2SHzc2eReo0RXMLIVFNSb7n3Ee1aCdR9IFALcXpM00w7yVsczM'
  );

  useEffect(() => {
    fetch(`http://localhost:4000/appointments/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);
  return (
    <div>
      <h2>
        Please Pay for: {appointment.patientName} for {appointment.serviceName}
      </h2>
      <h4>Pay: ${appointment.price}</h4>
     {appointment?.price && <Elements stripe={stripePromise}>
        <CheckoutForm
            appointment={appointment}
        />
      </Elements>}
    </div>
  );
};

export default Payment;
