import {Link} from 'react-router-dom';
export default function Navigation(){
    return(
        <header className ="Navbar">
            <nav>
                <ul>
                    <li className = "Left-Navbar"><Link to ='/'>Home Page</Link></li>
                    <li className = "Right-Navbar"><Link to ='/signup'>Signup</Link></li>
                    <li className = "Right-Navbar"><Link to ='/login'>Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}