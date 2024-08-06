import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PatientInfoFill =() =>{
    const [streetnum, setStreetNum] = useState('');
    const [streetname, setStreetName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [income, setIncome] = useState('');
    const [ssn, setSSN] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        let tempErrors = {};
        if (!streetnum) tempErrors.streetnum = "Street number is required";
        if (streetname.length < 2) tempErrors.streetname = "Street name is required";
        if (city.length < 2) tempErrors.city = "City is required";
        if (!/^[A-Z]{2}$/.test(state)) tempErrors.state = "State must be a 2-letter code";
        if (!/^\d{5}$/.test(zipcode)) tempErrors.zipcode = "Zipcode must be 5 digits";
        if (isNaN(income) || income < 0) tempErrors.income = "Income must be a valid number";
        if (!/^\d{3}-\d{2}-\d{4}$/.test(ssn)) tempErrors.ssn = "SSN must be in format: 123-45-6789";
        if (!/^\d{4}-\d{2}-\d{2}$/.test(birthdate)) tempErrors.birthdate = "Birthdate must be in format: YYYY-MM-DD";
        if (isNaN(age) || age < 0 || age > 120) tempErrors.age = "Age must be a valid number between 0 and 120";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('http://localhost:4000/patientinfofill', {
                    streetnum,
                    streetname,
                    city,
                    state,
                    zipcode,
                    income,
                    ssn,
                    birthdate,
                    age
                });
                if (response.data.success) {
                    console.log(response.data);
                    // Clear form fields
                    setStreetNum('');
                    setStreetName('');
                    setCity('');
                    setState('');
                    setZipcode('');
                    setIncome('');
                    setSSN('');
                    setBirthdate('');
                    setAge('');
                    setErrors({});
                    
                    // Navigate to the user profile
                    navigate("/userprofile"); 
                } else {
                    setErrors({ submit: response.data.message });
                }
            } catch (error) {
                console.error("Error during patient info submission:", error);
                setErrors({ submit: error.response?.data?.message || "Error submitting patient info. Please try again." });
            }
        }
    }
    
    return (
        <div id="gradient">
    <center><h1 className="title">Patient Information</h1></center>
    <form onSubmit={handleSubmit}>
        <center>
            <ul><b>Street Number</b></ul>
            <input type="text" style={{ width: '175px' }} placeholder="Enter Street Number" value={streetnum} onChange={(e) => setStreetNum(e.target.value)} required />
            {errors.streetnum && <p style={{ color: 'red' }}>{errors.streetnum}</p>}
            <br /><br />

            <ul><b>Street Name</b></ul>
            <input type="text" style={{ width: '175px' }} placeholder="Enter Street Name" value={streetname} onChange={(e) => setStreetName(e.target.value)} required />
            {errors.streetname && <p style={{ color: 'red' }}>{errors.streetname}</p>}
            <br /><br />

            <ul><b>City</b></ul>
            <input type="text" style={{ width: '175px' }} placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)} required />
            {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}
            <br /><br />

            <ul><b>State</b></ul>
            <input type="text" style={{ width: '175px' }} placeholder="Enter State (2-letter code)" value={state} onChange={(e) => setState(e.target.value)} required />
            {errors.state && <p style={{ color: 'red' }}>{errors.state}</p>}
            <br /><br />

            <ul><b>Zipcode</b></ul>
            <input type="text" style={{ width: '175px' }} placeholder="Enter Zipcode (12345)" value={zipcode} onChange={(e) => setZipcode(e.target.value)} required />
            {errors.zipcode && <p style={{ color: 'red' }}>{errors.zipcode}</p>}
            <br /><br />

            <ul><b>Income</b></ul>
            <input type="number" style={{ width: '175px' }} placeholder="Enter Annual Income" value={income} onChange={(e) => setIncome(e.target.value)} required />
            {errors.income && <p style={{ color: 'red' }}>{errors.income}</p>}
            <br /><br />

            <ul><b>SSN</b></ul>
            <input type="text" style={{ width: '175px' }} placeholder="Enter SSN (123-45-6789)" value={ssn} onChange={(e) => setSSN(e.target.value)} required />
            {errors.ssn && <p style={{ color: 'red' }}>{errors.ssn}</p>}
            <br /><br />

            <ul><b>Birthdate</b></ul>
            <input type="date" style={{ width: '175px' }} value={birthdate} onChange={(e) => setBirthdate(e.target.value)} required />
            {errors.birthdate && <p style={{ color: 'red' }}>{errors.birthdate}</p>}
            <br /><br />

            <ul><b>Age</b></ul>
            <input type="number" style={{ width: '175px' }} placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} required />
            {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
            <br /><br />

            <button type="submit">Submit Patient Information</button>
            {errors.submit && <p style={{ color: 'red' }}>{errors.submit}</p>}
            <br /><br /><br /><br />
        </center>
    </form>
</div>
    )

}
export default PatientInfoFill;