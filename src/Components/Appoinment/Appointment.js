import React, { useState } from 'react';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';
import BookAppointment from './BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate,setSelectedDate]=useState(new Date())

    const handleDateChange=(date)=>{
        setSelectedDate(date)
    }
    return (
        <div className='container'>
            <Navbar/>
            <AppointmentHeader handleDateChange={handleDateChange}/>
            <BookAppointment date={selectedDate}/>
            <Footer/>
        </div>
    );
};

export default Appointment;