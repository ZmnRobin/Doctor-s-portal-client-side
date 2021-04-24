import React from 'react';

const AppointmentByDate = ({appointments}) => {
    console.log(appointments)
    return (
        <div>
            <h2>Appointment {appointments.length}</h2>
        </div>
    );
};

export default AppointmentByDate;