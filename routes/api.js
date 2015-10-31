var express = require('express');
var router = express.Router();

var Person = require('../models/person.js')
var loggedin = require('../middlewares/loggedin');

//sensitive part
router.use(loggedin);

router.route('/person')
    .get(function (req, res) {
        Person.find(function (err, person) {
            if (err) {
                console.log(err);
                return res.send(500, 'Database internal error');
            }

            return res.json(person);

        });

    })

    .post(function (req, res) {
        console.log(req.body);
        person = req.body;
        delete person.token;
        Person.create(person, function (err, person) {
            if (err) {
                console.log(err);
                return res.json(err);
            }

            return res.json(person);

        });
    });

router.route('/person/:id')
    .get(function (req, res) {
        console.log('Find', req.params.id);
        Person.findById(req.params.id, function (err, person) {
            if (err) {
                console.log(err);
                return res.send(500, 'Error on creating post');
            }
            console.log('Found', person);
            return res.json(person)
        });
    })
    .put(function (req, res) {
        console.log('Update', req.params.id);
        person = req.body;
        delete person.token;

        Person.findByIdAndUpdate(req.params.id, person, {new: true}, function (err, personUpdated) {
            if (err) {
                console.log(err);
                return res.json(500, 'Error on updating person');
            }
            return res.json(personUpdated);
        });
    })
    .delete(function (req, res) {
        Person.findByIdAndRemove(req.params.id,function(err, person){
            if(err){
                console.log(err);
                return res.send(500, 'Could not remove person');
            }
            return res.json(person);
        });
    });

module.exports = router;
