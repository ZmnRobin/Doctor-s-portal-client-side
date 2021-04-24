import React from 'react';
import './OurDoctor.css'
import doctor from '../../../images/doctorr.png'

const ourDoctor=[
    {
        img:doctor,
        name:"Dr.Caudi"
    },
    {
        img:doctor,
        name:"Dr.Caudi"
    },
    {
        img:doctor,
        name:"Dr.Caudi"
    }
]

const OurDoctor = () => {
    return (
        <section className='our-doctor'>
            <div>
                <h6 style={{color:'rgb(19, 208, 207)',textAlign:'center'}}>OUR DOCTORS</h6>
            </div>
            <div className='d-flex justify-content-center mt-5'>
                <div className='row'>
                    {
                        ourDoctor.map(doctor=>{
                            return(
                                <div className="col-md-4 text-center">
                                    <img style={{height:'300px'}} src={doctor.img} alt=""/>
                                    <h5 className='mt-3'>{doctor.name}</h5>
                                    <small>+61 452 200 126</small>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    );
};

export default OurDoctor;