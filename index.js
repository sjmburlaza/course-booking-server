const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config();
app.use(cors());

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DBconnection is successful!"))
    .catch((err) => {
        console.log(err);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require('./routes/user');
const courseRoutes = require('./routes/course');

app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);

app.listen(process.env.PORT || 4000, () => {
    console.log(`API is now online on port ${ process.env.PORT || 4000 }`)
});