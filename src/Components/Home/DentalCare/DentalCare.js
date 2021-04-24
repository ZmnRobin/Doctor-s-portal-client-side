import React from 'react';
import baby from '../../../images/baby.png'

const DentalCare = () => {
    return (
        <section className="d-flex justify-content-center mt-5 mb-5">
            <div className="row w-75">
            <div className='col-md-5'>
                <img className='img-fluid' style={{height:'400px'}} src={baby} alt=""/>
            </div>
            <div className='col-md-7 mt-2'>
                <h1 style={{color:'#3D4457'}}>Exceptional Dental <br/>Care,on Your Terms </h1>
                <p className='mt-4 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, maxime laboriosam voluptatum voluptatem sapiente accusantium quasi distinctio, nisi illo explicabo neque reiciendis quam nemo iure ipsam blanditiis? Voluptates sapiente impedit maiores beatae libero totam amet hic adipisci iusto. Officia aliquid aliquam eum ea vero, harum officiis doloremque id placeat temporibus!
                quam nemo iure ipsam blanditiis? Voluptates sapiente impedit maiores beatae libero totam amet hic adipisci iusto. Officia aliquid aliquam</p>
                <button style={{backgroundColor:'rgb(19, 208, 207)',border:'none'}} className="btn btn-success mt-2">Learn More</button>
            </div>
            </div>
        </section>
    );
};

export default DentalCare;