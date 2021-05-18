const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
require('./utils/db');
const todoRoutes = require('./routes/todo');

const PORT = 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.use(todoRoutes);

if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(4000, () => {
	console.log(`app listening to port : ${PORT}`);
});
