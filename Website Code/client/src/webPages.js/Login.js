import {useState} from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:4000/login', {username: username, password: password})
        .then((data)=> {
            console.log(data);
            setUsername('');
            setPassword('');
        })
    }
    return (
        <div>
           Test for Login 2012
            <form onSubmit={handleSubmit}>
                <label htmlFor= 'username'>Username: </label>
                <input id = 'username' type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label htmlFor= 'username'>Username: </label>
                <input id = 'password' type='text' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <div> 
                    <button type ="submit">Submit </button>
                </div>
            </form>
        </div>        
    );
}
 
export default Login
