import React from 'react';
import './Testimonial.css' 
import doctor from '../../../images/Ellipse 1.png'
import doctorr from '../../../images/Ellipse 2.png'
import doctorrr from '../../../images/Ellipse 3.png'

const doctorData=[
    {
        name:'Winson Herry',
        img:doctor
    },
    {
        name:'Winson Herry',
        img:doctorr
    },
    {
        name:'Winson Herry',
        img:doctorrr
    }
]

const Testimonial = () => {
    return (
        <section className='testimonial'>
            <div className="ms-4">
                <h6 style={{color:'rgb(19, 208, 207)'}}>TESTIMONIAL</h6>
                <h1  style={{color:'#3A4256'}}>What's Our Patients <br/>Says</h1>
            </div>
            <div className='d-flex justify-content-center'>
            <div className="row mt-5">
                {
                    doctorData.map(doctor=>{
                        return(
                            <div className='doctor-card'>
                                <p style={{color:'#3A4256'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate dolorem esse porro nobis molestiae ratione dolore similique doloribus voluptatum! Inventore expedita possimus ipsum vero temporibus laboriosam consequuntur </p>
                                <div className='d-flex mt-4'>
                                    <div>
                                        <img src={doctor.img} alt=""/>
                                    </div>
                                    <div className='ms-4 mt-3'>
                                        <h6 style={{color:'rgb(19, 208, 207)'}}>{doctor.name}</h6>
                                        <p style={{color:'#3A4256'}}>California</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            </div>
        </section>
    );
};

export default Testimonial;