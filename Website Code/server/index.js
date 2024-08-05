const express = require ('express');
const app = express();
const cors = require ('cors');
const mysql = require ('mysql')


app.use(cors());

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sjcs clinic'
})
app.get('/', (req, res) => { 
    pool.query("INSERT INTO users (username, password) VALUES ('Testing1', '3123123123')", (err, result) =>{
        if (err){
            console.log(err);
        } else {
            console.log(result);
        }
    })
})  

app.listen(4000, () => {
    console.log('server listening on port 4000');
})