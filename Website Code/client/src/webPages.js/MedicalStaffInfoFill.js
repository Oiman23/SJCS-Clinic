import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MedicalStaffInfoFill =() =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verification, setVerification] = useState('');
    const [deny, setDeny] = useState('');
    const [errors, setErrors] = useState({});
    const [userId, setUserId] = useState (null);

    const navigate = useNavigate();

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (!storedUserId) {
            navigate('/login'); // Redirect to login if no user ID is found
        } else {
            setUserId(storedUserId);
        }
    }, [navigate]);
    
    const handleSubmit = async e => {
        e.preventDefault();
        if(!userId){
            setErrors({ submit: "User not logged in. Please log in and try again." });
            return; 
        }
        try {
            const response = await axios.post('http://localhost:4000/verification', {
                verification
            });
            console.log('Response:', response.data);
            if (response.data.success) {
                localStorage.setItem('type', response.data.MedicalType)
                setVerification('');
                setDeny('');
                setErrors({});
                navigate("/userprofile");
            } else {
                setDeny('Access Code Not Permissible');
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
            <h1><b>Enter Verification Code</b></h1>
            <br/>
            
            </div>
            <form onSubmit={handleSubmit}>
                <center>
                    <input type = "text" placeholder='Given Code' value ={verification} onChange={(e) => setVerification(e.target.value)} required />
                    <button type = "submit">Finish</button>
                </center>
            </form>
            <center><h3 style = {{color:'red'}}><b>{deny}</b></h3></center>
        </div>
    );
}
export default MedicalStaffInfoFill;