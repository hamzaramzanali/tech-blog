const router = require('express').Router();
const { Router } = require('express');
const { Post } = require('../models');

router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: Post,
          attributes: ['title', 'body'],
        }
      ]
    })
    res.render('login', {
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  });

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  router.get('/signup', (req, res) => {
      if (req.session.loggedIn) {
          res.redirect('/');
          return;
        }
        
        res.render('signup');
    });

    router.get('/logout', (req,res) => {
      if (req.session.loggedIn) {
        res.redirect('/')
        return;
      }

      res.render('login')
    })

    module.exports = router;