import {useState} from 'react';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFName] = useState('')
    const [lastname, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPNum] = useState('')
    const [gender, setGender] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/login', {
                username,
                password,
                firstname,
                lastname,
                email,
                phonenumber,
                gender
            });
            console.log(response.data);
            // Handle successful signup (e.g., show a success message, redirect)
        } catch (error) {
            console.error('Error signing up:', error);
            // Handle error (e.g., show error message)
        }
    };
    
    return (
        <html>
            <div id="gradient">
                <br></br><br></br><br></br><br></br>
                <center><h class="title">Register an Account</h></center>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <center>
                        <ul><b>Username</b></ul>
                        <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        <br/><br/>
                        <ul><b>Password</b></ul>
                        <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <br/><br/>
                        <ul><b>First Name</b></ul>
                        <input type="text" placeholder="Enter your First Name" value={firstname} onChange={(e) => setFName(e.target.value)} required />
                        <br/><br/>
                        <ul><b>Last Name</b></ul>
                        <input type="text" placeholder="Enter your Last Name" value={lastname} onChange={(e) => setLName(e.target.value)} required />
                        <br/><br/>
                        <ul><b>Email</b></ul>
                        <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <br/><br/>
                        <ul><b>Phone Number</b></ul>
                        <input type="tel" placeholder="Enter Phone Number" value={phonenumber} onChange={(e) => setPNum(e.target.value)} required />
                        <br/><br/>
                        <ul><b>Gender</b></ul>
                        <input type="text" placeholder="Enter Gender(M or F)" value={gender} onChange={(e) => setGender(e.target.value)} required />
                        <br/><br/>
                        <button type="submit">Sign Up</button>
                    </center>
                </form>
            </div>        
        </html>
    );
}
 
export default Signup;