import React from 'react';
import './Doctor.css'
import doctor from '../../../images/doctor.png'

const Doctor = () => {
    return (
        <section className="doctor-section">
            <div className='row'>
                <div className="col-md-5">
                    <img src={doctor} alt=""/>
                </div>
                <div className='col-md-7 mt-5'>
                    <h6 style={{color:'rgb(19, 208, 207)'}}>APPOINTMENT</h6>
                    <h1 style={{color:'white'}}>Make an appointment<br/>Today</h1>
                    <br/>
                    <p style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, maiores.</p>
                    <button className='btn btn-success mt-5'  style={{backgroundColor:'rgb(19, 208, 207)',border:'none'}}>Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default Doctor;