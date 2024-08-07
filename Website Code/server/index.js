const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.json());
app.use(cors());

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sjcs clinic'
})
app.post('/signup', (req, res) => {
    const { username, password, firstname, lastname, email, phonenumber, gender, medicalStaff } = req.body;
    const securityLevel = medicalStaff ? 1 : 0;

    pool.query(
        "INSERT INTO users (FirstName, LastName, SecurityLevel, UserName, UserPassword, Email, PhoneNumber, Gender) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [firstname, lastname, securityLevel, username, password, email, phonenumber, gender],
        (err, result) => {
            if (err) {
                console.error(err);
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(409).json({ success: false, message: 'Username or email already exists' });
                }
                return res.status(500).json({ success: false, message: 'Error during signup' });
            } else {
                return res.status(201).json({
                    success: true,
                    message: 'User created successfully',
                    user: { UID: result.insertId, username, firstname, lastname, email, phonenumber, gender, securityLevel }
                });
            }
        }
    );
});

app.post('/patientinfofill', (req, res) => {
    const { userId, streetnum, streetname, city, state, zipcode, income, ssn, birthdate, age } = req.body;

    pool.query(
        "INSERT INTO patients (UID, StreetNum, StreetName, City, State, ZipCode, Income, SSN, BirthDate, Age) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [userId, streetnum, streetname, city, state, zipcode, income, ssn, birthdate, age],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({success: false, message: 'Error during patient info submission'});
            } else {
                return res.status(201).json({
                    success: true,
                    message: 'Patient info added successfully',
                    patient: {streetnum, streetname, city, state, zipcode, income, ssn, birthdate, age}
                });
            }
        }
    );
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;

    pool.query(
        `SELECT u.FirstName, u.LastName, u.UserName, u.Email, u.PhoneNumber, 
                p.StreetNum, p.StreetName, p.City, p.State, p.ZipCode, p.Income, p.BirthDate, p.Age
         FROM users u
         JOIN patients p ON u.UID = p.UID
         WHERE u.UID = ?`,
        [userId],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ success: false, message: 'Error fetching user data' });
            }
            if (results.length === 0) {
                return res.status(404).json({ success: false, message: 'User not found' });
            }
            res.json(results[0]);
        }
    );
});

app.post('/login', (req, res) => {
    console.log('Login attempt:', req.body);  // Log the incoming request

    pool.query(
        "SELECT * FROM users WHERE UserName = ? AND UserPassword = ?",
        [req.body.username, req.body.password],
        (err, results) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ success: false, message: 'Server error' });
            }
            console.log('Query results:', results);  // Log the query results
            if (results.length > 0) {
                const user = results[0];
                return res.json({
                    success: true,
                    message: 'Login successful',
                    user: {
                        UID: user.UID,
                        UserName: user.UserName,
                        FirstName: user.FirstName,
                        LastName: user.LastName,
                        Email: user.Email,
                        PhoneNumber: user.PhoneNumber,
                        Gender: user.Gender,
                        SecurityLevel: user.SecurityLevel
                    }
                });
            } else {
                return res.json({ success: false, message: 'Invalid username or password' });
            }
        }
    );
});

app.listen(4000, () => {
    console.log('server listening on port 4000');
})