const express = require('express');
const mongoose = require('mongoose');

const Secret = require('./config/secret');
const FakeDB = require('./fake-db');
const rentalRoutes = require('./routes/rentals');

mongoose.connect(Secret.DB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true
}, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the database");
        const fakeDB = new FakeDB();
        fakeDB.seedDB();
    }
});

const app = express();

// Middleware
app.use('/api/v1/rentals', rentalRoutes);


app.listen(Secret.PORT, function () {
    console.log('App now running under the port ' + Secret.PORT)
});
