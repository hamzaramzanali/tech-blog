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

  module.exports = router;