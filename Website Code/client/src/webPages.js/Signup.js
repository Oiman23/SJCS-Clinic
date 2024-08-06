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
    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:4000/signup', {username: username, password: password, firstname: firstname, 
            lastname:lastname, email:email, phonenumber:phonenumber, gender:gender, medicalStaff: medicalStaff
        })
        .then((data)=> {
            console.log(data);
            setUsername('');
            setPassword('');
            setFName('');
            setLName('');
            setEmail('');
            setPNum('');
            setGender('');
            setMedicalStaff('');
        })
    }
    const navigate = useNavigate();
    function handleClick() {
        navigate("/");
    }
    return (       
        <div id="gradient">
            <br/><br/><br/><br/>
            <center><h1 className="title">Register an Account</h1></center>
            <br/>
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
                    <label htmlFor="medicalStaff">
                        <input 
                            type="checkbox" 
                            id="medicalStaff" 
                            checked={medicalStaff} 
                            onChange={(e) => setMedicalStaff(true)} 
                        />
                        Are you a Medical Staff?
                    </label>
                    <br/><br/>
                    <button type="submit" onClick={handleClick}>Sign Up</button>
                </center>
            </form>
        </div>        
    );
}
 
export default Signup;