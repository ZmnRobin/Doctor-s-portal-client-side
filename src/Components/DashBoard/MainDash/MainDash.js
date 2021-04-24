import React, { useContext } from "react";
import AppointmentByDate from "../AppointmentByDate/AppointmentByDate";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { UserContext } from "../../../App";

const MainDash = () => {

  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  console.log(appointments);
  const handleDateChange = (date) => {
    setSelectedDate(date);

    fetch("http://localhost:5000/appointmentByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date,email:loggedInUser.email}),
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  };

  return (
    <section className="container">
      <div className="container-fluid row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-5">
          <Calendar
            className="mt-5 calendar"
            onChange={handleDateChange}
            value={new Date()}
          />
        </div>
        <div className="col-md-5 mt-5"  >
            <div style={{
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            margin:'10px',
            padding:'20px'
           }}>
            <h5>Appointments</h5>
          <table class="table mt-4">
            <thead>
              <tr>

                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
                {
                    appointments.map(data=>{
                        return(
                            <tr>
                            <td>{data.name}</td>
                            <td>{data.phone}</td>
                            <td>{data.date}</td>
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

export default MainDash;
