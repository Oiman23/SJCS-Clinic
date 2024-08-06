import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate ();
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     axios.post('http://localhost:4000/login', {username: username, password: password})
    //     .then((data)=> {
    //         console.log(data);
    //         setUsername('');
    //         setPassword('');
    //     })
    // }
    return (
        <div id="gradient">
            <center>
            <h1 className = "title">Login</h1>
                <form>
                    <ul><b>Username</b></ul>
                    <input id = 'username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    <br/><br/>
                    <ul><b>Password</b></ul>
                    <input id = 'password' type='text' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <br/><br/>
                   
                    <div> 
                        <button> <Link to ='/userprofile'>Login</Link></button>
                    </div>
                </form>
            </center>
        </div>        
    );
}
 
export default Login
