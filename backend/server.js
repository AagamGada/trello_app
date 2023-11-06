const express = require('express');
const connectDB = require('./config/connectDB');
const notesRoute = require('./routes/notesRoute');
const cors = require('cors');

if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
} 

const app = express();

app.use(express.json());
app.use('/', notesRoute);
app.use(cors());

connectDB();

app.listen(3000, ()=>{
    console.log('App listening on port 3000')
})