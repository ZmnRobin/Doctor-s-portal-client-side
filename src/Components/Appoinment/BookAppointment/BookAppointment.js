import React, { useState } from 'react';
import './bookAppointment.css'
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  Modal.setAppElement('#root')

const bookingData = [
    {
        _id: '5e8df50be6e8231764dc23de',
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '5e8df578e6e8231764dc23df',
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:50 AM - 11:30 AM',
        totalSpace: 10
    },
    {
        _id: '5e8df5aee6e8231764dc23e0',
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '5:00 PM - 6:00 PM',
        totalSpace: 10
    },
    {
        _id: '5e8df63be6e8231764dc23e1',
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '7:00 AM - 8:30 AM',
        totalSpace: 10
    },
    {
        _id: '5e8df68de6e8231764dc23e2',
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '5e8df6a0e6e8231764dc23e3',
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    }
]

const BookAppointment = ({date}) => {

    const { register, handleSubmit, watch, errors } = useForm();
    
    const onSubmit = data =>{
        data.date=date;
        data.created=new Date();
        fetch('http://localhost:5000/appointment',{
            method: 'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(data)
        })

        .then(res=>res.json())
        .then(success=>{
            if (success) {
                closeModal();
                alert('Your appointment done successfully.!')
            }
        })
      
    } 

    const [modalIsOpen,setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
      }
    function closeModal(){
      setIsOpen(false);
    }

    return (
        <section>
            <h2 className='text-center mb-4' style={{color:'rgb(19, 208, 207)'}}>Available Appointments on {date.toDateString()}</h2>
            <div className=''>
            <div className='row text-center d-flex justify-content-center mb-5'>
                {
                    bookingData.map(data=>{
                        return(
                            <div className='col-md-4 book-card mb-5'>
                                <h5 className="mt-3" style={{color:'rgb(19, 208, 207)'}}>{data.subject}</h5>
                                <h6>{data.visitingHour}</h6>
                                <small>{data.totalSpace} SPACES AVAILABLE</small>
                                <br/>
                                <button onClick={openModal} style={{backgroundColor:'#13D0CF',border:'none'}} className='btn btn-success mt-3'>BOOK APPOINTMENT</button>

                                <div>
                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                
                                >      
                                  <h5 style={{color:'rgb(19, 208, 207)'}} className='text-center'>{data.subject}</h5>
                                <form onSubmit={handleSubmit(onSubmit)} className='modal-form'>
                                    <select class="form-control"    id="exampleFormControlSelect1" name="doctor-name" ref={register({required:true})}>
                                        <option value="doctor-1">Doctor 1</option>
                                        <option value="doctor-2">Doctor 2</option>
                                        <option value="doctor-3">Doctor 3</option>
                                        <option value="doctor-4">Doctor 4</option>
                                        <option value="doctor-5">Doctor 5</option>
                                    </select>
                                    <select class="form-control"    id="exampleFormControlSelect1" name="gender" ref={register({required:true})}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                
                                    </select>
                                        <input type="text" class="form-control" placeholder="Your Name" name="name" ref={register ({required:true})}/>
                                        <input type="text" class="form-control" placeholder="Age" name="age" ref={register ({required:true})}/>
                                        <input type="text" class="form-control" placeholder="Weight..kg" name="weight" ref={register ({required:true})}/>
                                        <input type="text" class="form-control" placeholder="Phone Number" name="phone" ref={register ({required:true})}/>
                                        <input type="text" class="form-control" placeholder="Email" name="email" ref={register ({required:true})}/>
                                        <input type="date" class="form-control" placeholder="mm/dd/yy" name="date" ref={register ({required:true})}/>
                                        <input type="submit" value="SEND" className="btn btn-success"
                                    style={{float:'right',width:'130px',backgroundColor:'rgb(19, 208, 207)',border:'none'}}/>
                                </form>
                                </Modal>
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

export default BookAppointment;