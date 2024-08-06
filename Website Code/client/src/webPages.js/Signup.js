import {useState} from 'react';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <div>
            <br></br><br></br><br></br><br></br>
            <center><h class="title">Register an Account</h></center>
            <br></br>
            <center><ul><b>Username</b></ul></center>
            <center><input type="text" placeholder="Enter Username" name="uname" required></input></center>
            <br></br>
            <center><ul><b>Password</b></ul></center>
            <center><input type="password" placeholder="Enter Password" name="psw" required></input></center>
            <br></br>
            <center><ul><b>First Name</b></ul></center>
            <center><input type="text" placeholder="Enter your First Name" name="fname" required></input></center>
            <br></br>
            <center><ul><b>Last Name</b></ul></center>
            <center><input type="text" placeholder="Enter your Last Name" name="lname" required></input></center>
            <br></br>
            <center><ul><b>Email</b></ul></center>
            <center><input type="text" placeholder="Enter Email" name="email" required></input></center>
            <br></br>
            <center><ul><b>Phone Number</b></ul></center>
            <center><input type="text" placeholder="Enter Phone Number" name="pnum" required></input></center>
            <br></br>
            <center><ul><b>Gender</b></ul></center>
            <center><input type="text" placeholder="Enter Gender(M or F)" name="gender" required></input></center>
            <br></br>
            <center><button type="submit">Sign Up</button></center>
        </div>        
    );
}
 
export default Signup;