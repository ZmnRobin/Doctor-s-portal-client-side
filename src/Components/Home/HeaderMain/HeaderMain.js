import React from 'react';
import { useHistory } from 'react-router';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    const history=useHistory()

    const handleClick=()=>{
        history.push('/appointment')
    }
    
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div  className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256',fontSize:'50px'}}>Your New Smile <br/> Starts Here</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ea nam facilis distinctio quod! In pariatur nihil quibusdam aliquam accusantium.</p>
                <button onClick={handleClick} style={{backgroundColor:'#13D0CF',border:'none'}} className="btn btn-success">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;