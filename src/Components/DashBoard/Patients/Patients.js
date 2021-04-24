import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/patients")
      .then((res) => res.json())
      .then((data) => setPatients(data));
  }, []);
  return (
    <section className="container">
      <div className="container-fluid row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10" >
          <h3 className="mt-3 ms-3">Patients</h3>
          <br />
          <br/>
          <div style={{
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            padding:'20px'
           }}>
          <h5 className=' mb-3 ms-4'>All Patients</h5>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Age</th>
                <th scope="col">Weight</th>
                <th scope="col">Contact</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
                {
                    patients.map(patient=>{
                        return(
                            <tr>
                            <th scope="row">1</th>
                            <td>{patient.name}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.age}</td>
                            <td>{patient.weight}</td>
                            <td>{patient.phone}</td>
                            <td>{patient.email}</td>
                          </tr> 
                        )
                    })
                }
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Patients;
