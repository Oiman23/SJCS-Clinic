import {useState} from 'react';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <center><h class="title">Sign Up</h></center>
            <br></br>
            <center><ul><b>Username</b></ul></center>
            <center><input type="text" placeholder="Enter Username" name="uname" required></input></center>
            <br></br>
            <center><ul><b>Password</b></ul></center>
            <center><input type="password" placeholder="Enter Password" name="psw" required></input></center>
            <br></br>
            <center><button type="submit">Sign Up</button></center>
        </div>        
    );
}
 
export default Signup;