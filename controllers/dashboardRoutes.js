const router = require('express').Router();
const { Router } = require('express');
const withAuth = require('../utils/auths')
const { Post } = require('../models');

router.get('/', withAuth, async (req, res) => {
  
      res.render('all-posts-admin', {
      });
   
    console.log(req)
  });

  router.get('/newpost', async (req, res) => {
    
    res.render('new-post', {
    });
    console.log(req)
  })

module.exports = router;