import React from 'react';
import './ContactForm.css'

const ContactForm = () => {
    return (
        <section className='contact-form'>
            <div className='text-center'>
                <h6 style={{color:'rgb(19, 208, 207)',padding:'30px'}}>CONTACT US</h6>
                <h1 className='mt-2 text-white'>Always Connect with us</h1>
            </div>
            <div className='d-flex justify-content-center mt-5'>
                <div className='w-50'>
                    <div className="mb-3 mt-3">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email Address*"/>
                    <input type="email" className="form-control mt-4" id="exampleFormControlInput1" placeholder="Subject*"/>
                    </div>
                    <div className="mb-3 mt-4 text-center">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message*"></textarea>
                    <br/>
                    <button className='btn btn-success' style={{backgroundColor:'rgb(19, 208, 207)'}}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;