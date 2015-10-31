var express = require('express');
var router = express.Router();
var bCrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');
var config = require('../config');
var User = require('../models/user');

router.route('/signup')
    .post(function(req, res){
        res.send('TODO implment signup');
    });

//sends successful login state back to angular
router.route('/login')

    .post(function (req, res) {
        console.log(req.body);

        User.findOne({username: req.body.username}, function (err, user) {

            if(err){
                console.log(err);
                return res.json({success: false, message: 'Internal Error'});
            }
            
            if (!user) {
                console.log('User ' + req.body.username + 'not found');
                return res.json({success: false, message: 'Authentication failed. Incorrect username or passwod'});
            }
            
            if(!isValidPassword(user, req.body.password)){
                console.log('Wrong passwrod');
                return res.json({success: false, message: 'Authentication failed. Incorrect username or passwod'});
            }
            
        
            var token = jwt.sign(user, config.secret, {
                expiresInMinutes: 1440 // expires in 24 hours
            });
            
            res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token
            });
                
        })
    });

router.route('/sugnout')
    .get(function(req, res) {
        res.send('TODO implment signout');
    });

var isValidPassword = function (user, password) {
    return bCrypt.compareSync(password, user.password);
};

// Generates hash using bCrypt
var createHash = function (password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
};

module.exports = router;
