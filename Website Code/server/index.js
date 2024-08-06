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
app.post('/signup', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;
    const gender = req.body.gender;
    const medicalStaff = req.body.medicalStaff ? 1: 0;
    pool.query("INSERT INTO users (FirstName, LastName, SecurityLevel, UserName, UserPassword, Email, PhoneNumber, Gender) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [firstname, lastname, medicalStaff, username, password,  email, phonenumber, gender], (err, result)=>{
        if (err) {
            console.log(err);
        } else {
            res.send({username: username});
            res.send({password: password});
            res.send({firstname: firstname});
            res.send({lastname:lastname});
            res.send({email:email});
            res.send({phonenumber:phonenumber});
            res.send({gender:gender});
            res.send({medicalStaff: medicalStaff});
            
        }
    })  
})

app.listen(4000, () => {
    console.log('server listening on port 4000');
})