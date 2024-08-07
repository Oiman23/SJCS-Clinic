import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const UserProfile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const userId = localStorage.getItem('userId');
            if (!userId) {
                navigate('/login');
                return;
            }

            try {
                const response = await axios.get(`http://localhost:4000/user/${userId}`);
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
                navigate('/login');
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('userId');
        navigate('/');
    };

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div id="gradient">
            <br/> 
            <button onClick={handleLogout} type="button">Click to Log Out</button>
            <br/><br/><br/>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Annual Income</th>
                        <th>Birthdate</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{userData.FirstName}</td>
                        <td>{userData.LastName}</td>
                        <td>{userData.UserName}</td>
                        <td>{userData.Email}</td>
                        <td>{userData.PhoneNumber}</td>
                        <td>{`${userData.StreetNum} ${userData.StreetName}, ${userData.City}, ${userData.State} ${userData.ZipCode}`}</td>
                        <td>${userData.Income}</td>
                        <td>{userData.BirthDate}</td>
                        <td>{userData.Age}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserProfile;