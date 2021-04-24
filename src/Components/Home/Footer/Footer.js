import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <section>
            <div className='footer'>
            <div className='row ms-3 mt-5 '>
                <div className='col-md-3 mt-4'>
                    <p>Emergency Dental Care</p>
                    <p>Check Up</p>
                    <p>Treatment of personal Diseases</p>
                    <p>Tooth Extraction</p>
                    <p>Check Up</p>
                </div>
                <div className='col-md-3'>
                    <h6 style={{color:'rgb(19, 208, 207)'}}>Services</h6>
                    <p>Emergency Dental Care</p>
                    <p>Check Up</p>
                    <p>Treatment of Personal Diseases</p>
                    <p>Tooth Extraction</p>
                    <p>Check Up</p>
                    <p>Check Up</p>
                    <p>Check Up</p>
                </div>
                <div className='col-md-3'>
                    <h6 style={{color:'rgb(19, 208, 207)'}}>Oral Health</h6>
                    <p>Emergency Dental Care</p>
                    <p>Check Up</p>
                    <p>Treatment of personal Diseases</p>
                    <p>Tooth Extraction</p>
                    <p>Check Up</p>
                    <p>Check Up</p>
                    <p>Check Up</p>
                </div>
                <div className='col-md-3'>
                    <h6 style={{color:'rgb(19, 208, 207)'}}>Our Address</h6>
                    <p>New York - 101010 Hudson <br/>Yards</p>
                    <br/>
                    <br/>
                    <br/>
                    <p>Call Now</p>
                    <p>+2025550295</p>
                </div>
            </div>
            </div>
            <footer className='text-secondary text-center m-2'>Copyright 2020 All Rights Reserved</footer>
        </section>
    );
};

export default Footer;