import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MedicalStaffInfoFill =() =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verification, setVerification] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/signup', {
                username, 
                password, 
                verification
            });
            if (response.data.success) {
                setVerification('');
                // Navigate based on user type
            }
        } catch (error) {
            console.error("Error during signup:", error);
            setErrors({ submit: error.response?.data?.message || "Error during signup. Please try again." });
        }
    
    }
    return (
        <div id="gradient">
            <center><h1 className="title">Medical Staff Information</h1></center>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <h1>
                <b>Enter Verification Code</b></h1>
            </div>
            <form onSubmit={handleSubmit}>
                <center>
                    <input type = "text" placeholder='Given Code' value ={verification} />
                    <button type = "submit">Finish</button>
                </center>
            </form>
        </div>
    );
}
export default MedicalStaffInfoFill;