import React from 'react';
import './Blog.css'
import doctor from '../../../images/Ellipse 1.png'

const blog=[
    {
        img:doctor,
        name:'Rashed Kabir',
        date:'22 Aug 2018',
        title:'Check at least a doctor in a year for your teeth'
    },
    {
        img:doctor,
        name:'Dr.Caudi',
        date:'23 April 2019',
        title:'2 times of brush in a day can keep you healthy'
    },
    {
        img:doctor,
        name:'Dr.John Mitchel',
        date:'23 April 2019',
        title:'The tooth cancer is taking a challenge'
    }
]
const Blog = () => {
    return (
        <section className='blog'>
            <div style={{textAlign:'center'}}>
                <h6 style={{color:'rgb(19, 208, 207)'}}>OUR BLOG</h6>
                <h1 className='mt-4' style={{color:'#3A4256'}}>From Our Blog News</h1>
            </div>
            <div className='d-flex justify-content-center mt-5'>
                <div className='row'>
                    {
                        blog.map(blogs=>{
                            return(
                                <div className='doctor-card below'>
                                    <div className='d-flex mt-4'>
                                    <div>
                                        <img src={blogs.img} alt=""/>
                                    </div>
                                    <div className='ms-4 mt-3'>
                                        <h6>{blogs.name}</h6>
                                        <p className='text-secondary'>{blogs.date}</p>
                                    </div>
                                </div>
                                <h5 className='mt-4'>{blogs.title}</h5>
                                <p className='text-secondary mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate dolorem esse porro nobis molestiae ratione dolore similique doloribus voluptatum! Inventore expedita  </p>
                                
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;