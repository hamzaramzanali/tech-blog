const { Post} = require('../models');

const postdata = [
    {
        title: 'Test Seed',
        body: 'This is a test seed to show the user a blog post that was already created.'
    },
    {
        title: 'Test Seed 2',
        body: 'This is a second seed to show the user the posts that were already created.'
    },
    {
        title: 'Test Seed 3',
        body: 'This is a third seed to show the user the posts that were already created.'
    }
]

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;