const mongoose = require('mongoose');
const mongoUri = require('./keys.json').mongoUri;

const connectDb = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Mongo Db Connected...');
  } catch (err) {
    console.log('Something went wrong...');
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
