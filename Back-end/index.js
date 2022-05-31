require('dotenv').config();
const express = require('express');
var bodyParser = require('body-parser');
//npm i cors
var cors = require('cors');

const db = require('./db/dbconfig');
console.log(db);
db
.conn()
.then((res)=>{
     console.log('Connection Done');
    // console.log(res);
})
.catch((err)=>{
    console.log(err);
    //process.exit(1);
});

const app = express();

const bedR = require('./routes/bedRoutes');
const loginR = require('./routes/loginRoute');

//http://localhost:4000/api/bed (GET,POST)
// http://localhost:4000/api/login

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());


app.use("/api/bed" , bedR);
app.use("/api/login" , loginR);


app.listen(process.env.PORT , ()=>{
    console.log('SERVER LISTENING ');
})