var express = require('express');
var router = express.Router();
var mysql = require('mysql');

// cloud RTDB
var firebase = require("firebase");
firebase.initializeApp({
  databaseURL: "https://ad-webapp-ee28e.firebaseio.com/"
});

var dbRef = firebase.database().ref("users");

// lcoal MysqlDB
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sharmitha"
});

/* GET home page. */
router.get('/', function(req, res, next) {
  dbRef.once('value').then(snap => {                          
        snap.child("users").val(); // instead of this line write like below
        const isviolate =  snap.val().isviolate;
        //if () return null
        console.log("isviolate", isviolate);
})
  res.render('index',{js:'/javascripts/plot.js'});
});

// code for the dropdown
router.get('/cafe',function(req,res,next){
  
      // console.log(isvio); 
  res.render('index',{js:'/javascripts/plot.js'});
});
module.exports = router;
