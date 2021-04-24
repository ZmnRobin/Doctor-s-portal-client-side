import React from 'react';
import fluoride from '../../../images/001-dental.png'
import cavity from '../../../images/tooth (1).png'
import teath from '../../../images/tooth.png'
const services=[
    {
        title:'Fluoride Treatment',
        img:fluoride,
    },
    {
        title:'Cavity Filling',
        img:cavity,
    },
    {
        title:'Teath Whitening',
        img:teath,
    }
]

const Services = () => {
    return (
        <section>
            <div className='text-center mt-5'>
                <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
                <h1 className="mt-3" style={{color:'#3A4256'}}>Services We Provide</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='row w-75 mt-5'>
                {
                    services.map(service=>{
                        return(
                            <div className='col-md-4 text-center'>
                                <img style={{height:'80px'}} src={service.img} alt=""/>
                                <h5 className='mt-4'>{service.title}</h5>
                                <p className='mt-4 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magni quos corrupti earum eaque officiis.</p>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </section>
    );
};

export default Services;