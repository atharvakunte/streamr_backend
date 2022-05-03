require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//IMPORT ROUTES
const authRoutes = require('./routes/auth');
const songRoutes = require('./routes/song');


//PORT
const port = process.env.PORT || 8000;

//DB Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DATABASE CONNECTED SUCCESSFULLY");
});

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Start the server
app.listen(port, ()=>{
    console.log(`APP IS RUNNING AT PORT ${port}`);
})

//APP ROUTES (ENDPOINTS)
app.use("/api",authRoutes);
app.use("/api",songRoutes);