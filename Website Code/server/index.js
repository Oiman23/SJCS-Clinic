const express = require ('express');
const app = express();
const cors = require ('cors');
const mysql = require ('mysql')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use(cors());

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sjcs clinic'
})
app.post('/signup', (req, res) => {
    const {username, password, firstname, lastname, email, phonenumber, gender, medicalStaff} = req.body;
    const securityLevel = medicalStaff ? 1 : 0;

    pool.query(
        "INSERT INTO users (FirstName, LastName, SecurityLevel, UserName, UserPassword, Email, PhoneNumber, Gender) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [firstname, lastname, securityLevel, username, password, email, phonenumber, gender],
        (err, result) => {
            if (err) {
                console.error(err);
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(409).json({success: false, message: 'Username or email already exists'});
                }
                return res.status(500).json({success: false, message: 'Error during signup'});
            } else {
                return res.status(201).json({
                    success: true,
                    message: 'User created successfully',
                    user: {username, firstname, lastname, email, phonenumber, gender, securityLevel}
                });
            }
        }
    );
});
app.listen(4000, () => {
    console.log('server listening on port 4000');
})