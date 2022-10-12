const sequelize = require('../config/connection');
const seedPost = require('./postsdata');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPost();

  process.exit(0);
};

seedAll();