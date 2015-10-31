var LocalStrategy = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

var User = require('./models/user.js');

module.exports = function (passport) {

    // Passport needs to be able to serialize and deserialize users to support persistent login sessions
    passport.serializeUser(function (user, done) {

        //tell passport which id to use for user
        console.log('serializing user:', user._id);
        return done(null, user._id);
    });

    passport.deserializeUser(function (id, done) {

        User.findById(id, function (err, user) {
            if (err) {
                return done(err, false);
            }
            
            if (!user) {
                return done('User not found', false);
            }
            
            return done(user, true);

        });

    });

    passport.use('login', new LocalStrategy({
            passReqToCallback: true
        },
        function (req, username, password, done) {
            console.log(req.body);

            User.findOne({username: username}, function (err, user) {

                if(err){
                    console.log(err);
                    return done(err, false);
                }
                
                if (!user) {
                    console.log('User ' + username + 'not found');
                    return done('incorrect username or password', false);
                }
                
                if(!isValidPassword(user, password)){
                    console.log('Wrong passwrod');
                    return done('incorrect username or password', false);
                }
                
        
                var token = jwt.sign(user, app.get('secret'), {
                    expiresInMinutes: 1440 // expires in 24 hours
                });
                
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
                
            })
        }
    ));

    passport.use('signup', new LocalStrategy({
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function (req, username, password, done) {

            //check if user exists
            User.findOne({username: username}, function (err, user) {

                if (err) {
                    console.log(err);
                    return done(err, false);
                }

                if (user) {
                    console.log('Username already taken');
                    return done('Username already taken');
                }

                var user = new User();

                user.username = username;
                user.password = createHash(password);

                user.save(function (err, user) {
                    if (err) {
                        return done(err, false);
                    }

                    console.log('Sucess', user);
                    return done(null, user)
                });


            });

        }));

    var isValidPassword = function (user, password) {
        return bCrypt.compareSync(password, user.password);
    };
    // Generates hash using bCrypt
    var createHash = function (password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    };

};
