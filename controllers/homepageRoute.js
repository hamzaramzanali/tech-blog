const router = require('express').Router();
const { Router } = require('express');
const { Post } = require('../models');

router.get('/', async (req, res) => {
    // try {
    //   const dbGalleryData = await Gallery.findAll({
    //     include: [
    //       {
    //         model: Painting,
    //         attributes: ['filename', 'description'],
    //       },
    //     ],
    //   });
  
    //   const galleries = dbGalleryData.map((gallery) =>
    //     gallery.get({ plain: true })
    //   );
  
      res.render('login', {
      });
    // } catch (err) {
    //   console.log(err);
    //   res.status(500).json(err);
    // }
    console.log(req)
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