import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Appointments = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const handleAppointments = () => {
        navigate('/userprofile');
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
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
                <tbody>
                    <tr>
                        <td>blablablab</td>
                        <td>blablablab</td>
                        <td>blablablab</td>
                        <td>blablablab</td>
                        <td>blablablab</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={handleAppointments} className="appointment">Back to Profile</button>
            {isVisible && (<button onClick={scrollToTop} className="back-to-top">↑</button>)}
        </div>
    )

}
export default Appointments;