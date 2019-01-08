const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');

router.get('/', function (req, res, next) {
    Rental.find({}, function (err, result) {

        res.json(result);

    });
});

router.get('/:id', function (req, res, next) {
    const rentalId = req.params.id;

    Rental.findById(rentalId, function (err, result) {
        if(err) {
            res.status(422).send({
                errors: [{
                    title: 'Error!',
                    detail: 'Could not find any rentals!'
                }]
            });
        }

        res.json(result);
    });
});

module.exports = router;
