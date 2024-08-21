import {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Appointments =() =>{
    const navigate = useNavigate();
    const handleAppointments = () => {
        navigate('/userprofile');
    };
    
    return (
        <div id="gradient">
            <center><h1 className="title">Appointment Availability</h1></center>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Profile</th>
                    </tr>
                </thead>
            </table>
            <button onClick={handleAppointments} className="appointment">Back to Profile</button>
        </div>
    )

}
export default Appointments;