const router = require('express').Router();
const { Router } = require('express');
const { Post } = require('../models');

router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      // include: [
      //   {
      //     model: Post,
      //     attributes: ['title', 'body'],
      //   }
      // ]
    })

    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render('all-posts', {
      posts
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

  router.post('/signup', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.userId = userData.id;
        req.session.loggedIn = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
    });

    router.get('/logout', (req,res) => {
      if (req.session.loggedIn) {
        res.redirect('/')
        return;
      }

      res.render('login')
    })

    module.exports = router;