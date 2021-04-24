import React from 'react';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Buisness.css'

const cardData=[{
    title:"Opening Hours",
    description:" We are always open for you",
    icon:faClock,
    background:"primary",
},
{
    title:"Visit our location",
    description:"Brooklyn,NY 10036,United States",
    icon:faMapMarker,
    background:"dark"
},
{
    title:"Contact us now",
    description:"+000123 456 789",
    icon:faPhone,
    background:'primary'
}]

const BuisnessInfo = () => {

    return (
        <div className="d-flex justify-content-center">
            <div className='row w-75'>
            {
                cardData.map(data=>{
                    return(
                        <div className="col-md-4 text-white">
                            <div className={`d-flex justify-content-center info-container info-${data.background}`}>
                            <div className='me-3'>
                                <FontAwesomeIcon className="font-icon " icon={data.icon}/>
                            </div>
                            <div>
                                <h6>{data.title}</h6>
                                <small>{data.description}</small>
                            </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};

export default BuisnessInfo;