var express = require('express');
var router = express.Router();
router.use(express.static('./public'));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/login.ejs', function(req, res, next) {
    res.render('login');
   
  });
  router.get('/book.ejs', function(req, res, next) {
    res.render('book');
   
  });

  router.get('/booked.ejs', function(req, res, next) {
    var arr=[{name:'Rajesh Gol', num:9328294, time: 2},{name:'Harsh Pal Yadav', num:6328294, time: 5},{name:'Tommy Sahu',num:73728294, time: 1},{name:'Lokesh Yadav', num:12328294, time: 3},{name:'Manesh Raj', num:3428294, time: 4},{name:'Gabru Sonil', num:9028294, time: 6}] 
    var obj=arr[Math.floor(Math.random()*arr.length)];

    res.render('booked',{obj,loc:req.query.loc,desti:req.query.desti});
  
  });
  

module.exports = router;
