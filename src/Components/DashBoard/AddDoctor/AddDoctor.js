import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {

    const [info,setInfo]=useState({})

    const [file,setFile]=useState(null)

    const handleFile=(e)=>{
        const newFile=e.target.files[0];
        setFile(newFile)
    }
    const handleBlur=(e)=>{
        const newInfo={...info}
        newInfo[e.target.name]=e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit=()=>{
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)
      
        fetch('http://localhost:5000/addDoctor', {
          method: 'POST',
          body: formData
        })

        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
    }

    return (
       <section className='container'>
            <div className='container-fluid row'>
                <div className='col-md-2'>
                    <Sidebar/>
                </div>
                <div className='col-md-10'>
                    <h4 className='m-2'>Add a Doctor</h4>
                    <br/>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input onBlur={handleBlur} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email'/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Name</label>
                            <input onBlur={handleBlur} type="text" name="name" class="form-control" id="exampleInputPassword1" placeholder='name'/>
                        </div>

                        <div class="mb-3">
                        <label htmlFor="">Upload a Photo</label>
                        <br/>
                        <input onChange={handleFile} type="file" name="files" class="form-control" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
           </div>
       </section>
    );
};

export default AddDoctor;