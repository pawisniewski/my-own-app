const mongoose = require('mongoose');
const loadInitData = require('./initialData');

const connectToDB = (dbURI) => {
  mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.once('open', () => {
    console.log('Connected to the database', dbURI );
    loadInitData();
  });
  db.on('error', err => console.log('Error: ' + err));
};

module.exports = connectToDB;
