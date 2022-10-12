const router = require('express').Router();
const { Router } = require('express');
const { Post } = require('../models');

router.get('/', async (req, res) => {
  
      res.render('all-posts-admin', {
      });
   
    console.log(req)
  });

module.exports = router;