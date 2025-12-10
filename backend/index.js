const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./backend/src/config/db');

dotenv.config();
const app = express();
const port = process.env.PORT;

connectDB();

app.listen(port, () => {
	console.log('app is running...');
});
