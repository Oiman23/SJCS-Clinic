import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/login', {
                username, 
                password
            });
            
            console.log('Response:', response.data);  // Log the response data
    
            if (response.data.success) {
                localStorage.setItem('userId', response.data.user.UID);
                localStorage.setItem('username', response.data.user.UserName);
                
                if (response.data.user.SecurityLevel === 1) {
                    navigate('/medicalstaff');
                } else {
                    navigate('/userprofile');
                }
            } else {
                setError('Invalid username or password');
            }
        } catch (err) {
            console.error('Error details:', err.response?.data || err.message);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div id="gradient">
            <center>
                <h1 className="title">Login</h1>
                <form onSubmit={handleSubmit}>
                    <ul><b>Username</b></ul>
                    <input id='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    <br/><br/>
                    <ul><b>Password</b></ul>
                    <input id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <br/><br/>
                    <div> 
                        <button type="submit">Login</button>
                    </div>
                </form>
                {error && <p style={{color: 'red'}}>{error}</p>}
            </center>
        </div>        
    );
}
 
export default Login;