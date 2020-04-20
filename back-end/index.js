const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db');
const userController = require('./userController');

var app = express();
app.use(bodyParser.json());

app.use(cors({ origin: process.env.FRONTEND_DOMAIN }))

app.use('/users', userController);

app.listen(process.env.PORT, () => console.log("Server Started at port 3000"));

