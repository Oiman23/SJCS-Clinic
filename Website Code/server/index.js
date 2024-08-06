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
app.post('/login', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    pool.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, password], (err, result)=>{
        if (err) {
            console.log(err);
        } else {
            res.send({username: username});
            res.send({password: password});

        }
    })
    
})
app.listen(4000, () => {
    console.log('server listening on port 4000');
})