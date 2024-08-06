import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFName] = useState('')
    const [lastname, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [phonenumber, setPNum] = useState('')
    const [gender, setGender] = useState('')
    const [medicalStaff, setMedicalStaff] = useState(false)
    const [patient, setPatient] = useState(false)
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const validateForm = () => {
        let tempErrors = {};
        if(username.length < 3) tempErrors.username = "Username must be at least 3 characters";
        if(password.length < 6) tempErrors.password = "Password must be at least 6 characters";
        if(firstname.length < 2) tempErrors.firstname = "First name is required";
        if(lastname.length < 2) tempErrors.lastname = "Last name is required";
        if(!/\S+@\S+\.\S+/.test(email)) tempErrors.email = "Email is invalid";
        if(!/^\d{3}-\d{3}-\d{4}$/.test(phonenumber)) tempErrors.phonenumber = "Phone number must be in format: 123-456-7890";
        if(!['M', 'F'].includes(gender.toUpperCase())) tempErrors.gender = "Gender must be M or F";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };
    const handleSubmit = async e => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('http://localhost:4000/signup', {
                    username, password, firstname, lastname, email, phonenumber, gender, medicalStaff, patient
                });
                console.log(response.data);
                // Clear form fields
                setUsername('');
                setPassword('');
                setFName('');
                setLName('');
                setEmail('');
                setPNum('');
                setGender('');
                setMedicalStaff(false);
                setPatient(false);
                // Navigate to home page
                navigate("/");
            } catch (error) {
                console.error("Error during signup:", error);
                setErrors({ submit: "Error during signup. Please try again." });
            }
        }
    }
    return (       
        <div id="gradient">
            <br/><br/><br/><br/>
            <center><h1 className="title">Register an Account</h1></center>
            <br/>
            <form onSubmit={handleSubmit}>
                <center>
                    <ul><b>Username</b></ul>
                    <input type="text" style={{width: '175px'}} placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    {errors.username && <p style={{color: 'red'}}>{errors.username}</p>}
                    <br/><br/>
                    <ul><b>Password</b></ul>
                    <input type="password" style={{width: '175px'}} placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
                    <br/><br/>
                    <ul><b>First Name</b></ul>
                    <input type="text" style={{width: '175px'}} placeholder="Enter your First Name" value={firstname} onChange={(e) => setFName(e.target.value)} required />
                    {errors.firstname && <p style={{color: 'red'}}>{errors.firstname}</p>}
                    <br/><br/>
                    <ul><b>Last Name</b></ul>
                    <input type="text" style={{width: '175px'}} placeholder="Enter your Last Name" value={lastname} onChange={(e) => setLName(e.target.value)} required />
                    {errors.lastname && <p style={{color: 'red'}}>{errors.lastname}</p>}
                    <br/><br/>
                    <ul><b>Email</b></ul>
                    <input type="email" style={{width: '175px'}} placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
                    <br/><br/>
                    <ul><b>Phone Number</b></ul>
                    <input type="pNum" placeholder="Ex.(123-456-7890)" value={phonenumber} onChange={(e) => setPNum(e.target.value)} required />
                    {errors.phonenumber && <p style={{color: 'red'}}>{errors.phonenumber}</p>}
                    <br/><br/>
                    <ul><b>Gender</b></ul>
                    <input type="text" placeholder="Enter Gender(M or F)" value={gender} onChange={(e) => setGender(e.target.value)} required />
                    {errors.gender && <p style={{color: 'red'}}>{errors.gender}</p>}
                    <br/><br/>
                    <button type="submit">Sign Up</button>
                    {errors.submit && <p style={{color: 'red'}}>{errors.submit}</p>}
                </center>
            </form>
        </div>        
    );
}
export default Signup;