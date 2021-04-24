import React from 'react';
import Blog from '../Blog/Blog';
import ContactForm from '../ContactForm/ContactForm';
import DentalCare from '../DentalCare/DentalCare';
import Doctor from '../Doctor/Doctor';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurDoctor from '../OurDoctor/OurDoctor';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className="container">
            <Header/>
            <Services/>
            <DentalCare/>
            <Doctor/>
            <Testimonial/>
            <Blog/>
            <OurDoctor/>
            <ContactForm/>
            <Footer/>
        </div>
    );
};

export default Home;