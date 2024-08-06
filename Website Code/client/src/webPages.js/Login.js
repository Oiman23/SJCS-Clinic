import {useState} from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost/login', {username})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    return (
        <div>
            <text>Test for Login 2012</text>
            <form onSubmit={handleSubmit}>
                <label htmlFor= 'username'>username: </label>
                <input htmlFor = 'username' placeholder='Enter username' onChange={e => setUsername(e.target.value)}/>
                <button type ="submit">Submit </button>
            </form>
        </div>        
    );
}
 
export default Login
