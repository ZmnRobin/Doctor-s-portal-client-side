import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link className='link' to='/home'>Home</Link>
            <br/>
            <br/>
            <Link className='link' to='/dashboard'>Dashboard</Link>
            <br/>
            <br/>
            <Link className='link ' to='/appointments'>Appointment</Link>
            <br/>
            <br/>
            <Link className='link' to='/patients'>Patients</Link>
            <br/>
            <br/>
            <Link className='link'>Prescription</Link>
            <br/>
            <br/>
            <Link className='link' to='/addDoctor'>Add Doctor</Link>
            <br/>
            <br/>
            <Link className='link'>Setting</Link>
        </div>
    );
};

export default Sidebar;