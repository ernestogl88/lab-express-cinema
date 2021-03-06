const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');

router.get('/', (req,res, next)=> {
  Movie.find()
  .then( data => {
    res.render('movies', {data});
  })
  .catch((err)=>{
    console.log(err);
  }); 
});

module.exports = router;