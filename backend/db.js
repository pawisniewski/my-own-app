const mongoose = require('mongoose');
const loadInitData = require('./initialData');

const connectToDB = () => {
  mongoose.connect('mongodb://localhost:27017/MyOwnDB', { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.once('open', () => {
    console.log('Connected to the database');
    loadInitData();
  });
  db.on('error', err => console.log('Error: ' + err));
};

module.exports = connectToDB;
