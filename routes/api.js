var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/person')
    .get(function(req,res){
        var persons = [
        {
          "pk": 11,
          "name": "Alice",
          "email": "alice@alice.com",
          "photo": "http://static.comicvine.com/uploads/original/11114/111144184/4617466-3042271263-Alice.jpg",
          "sex": "Female",
          "birthdate": "2015-10-08T03:00:00.000Z",
          "phone": "23434"
        },
        {
          "pk": 38,
          "name": "Anonymous",
          "email": "anonymous@gmail.com",
          "photo": "https://conspiracycritic7.files.wordpress.com/2013/01/wpid-renders_anonymous_mask_by_samcro_33-d4q56cv1.png",
          "sex": "Male",
          "birthdate": "10/04/2006",
          "phone": "+16476489006"
        },
        {
          "pk": 30,
          "name": "Beth",
          "email": "beth@beth.com",
          "photo": "http://images2.fanpop.com/images/photos/6400000/Adriana-Lima-Profile-adriana-lima-6461343-1024-768.jpg",
          "sex": "Female",
          "birthdate": "1987-12-01T02:00:00.000Z",
          "phone": "355587677"
        },
        {
          "pk": 31,
          "name": "Bill",
          "email": "bill@bill.com",
          "photo": "http://pbs.twimg.com/profile_images/558109954561679360/j1f9DiJi.jpeg",
          "sex": "Male",
          "birthdate": "1956-06-13T03:00:00.000Z",
          "phone": "34235234"
        },
        {
          "pk": 23,
          "name": "Cameron",
          "email": "cameron@gmail.com",
          "photo": "http://www.pulsarwallpapers.com/data/media/758/Summer_Glau_2508_Wallpaper.jpg",
          "sex": "Female",
          "birthdate": "2015-10-08T03:00:00.000Z",
          "phone": "3243434"
        },
        {
          "pk": 24,
          "name": "Chaves",
          "email": "chaves@gmail.com",
          "photo": "http://blog.idealshop.com.br/wp-content/uploads/2013/08/chaves.jpg",
          "sex": "Male",
          "birthdate": "234324",
          "phone": "+558399930555"
        },
        {
          "pk": 36,
          "name": "Fernando",
          "email": "fernandodof@gmail.com",
          "photo": "https://secure.gravatar.com/avatar/7620f9615b7df31af07ba7fc06f2ca54.jpg?s=150&r=g&d=mm",
          "sex": "Male",
          "birthdate": "1992-07-03T03:00:00.000Z",
          "phone": "+16476489006"
        },
        {
          "pk": 29,
          "name": "George",
          "email": "geroge@george.com",
          "photo": "http://bestpetvacuumhub.com/wp-content/uploads/2015/05/Sacca_profile_400x400.jpg",
          "sex": "Male",
          "birthdate": "2015-10-15T03:00:00.000Z",
          "phone": "435678"
        },
        {
          "pk": 20,
          "name": "Goku",
          "email": "goku@gmail.com",
          "photo": "http://static.comicvine.com/uploads/original/11123/111235708/4697388-6975553699-Gokun.png",
          "sex": "Male",
          "birthdate": "1984-07-12T03:00:00.000Z",
          "phone": "3232323"
        },
        {
          "pk": 21,
          "name": "Josef",
          "email": "josef@josef.com",
          "photo": "http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg",
          "sex": "Male",
          "birthdate": "2015-10-22T03:00:00.000Z",
          "phone": "33123213"
        }
      ];
    
        res.json(persons);
    })
    
    .post(function(req,res){
        res.json({message: 'Create a new person'});
    });

module.exports = router;
