let dbURI;
switch (process.env.NODE_ENV) {
  
  case 'test':
    dbURI = 'mongodb://localhost:27017/MyOwnDBtest';
    break;

  case 'production':
    dbURI = 'mongodb+srv://pawel_wisniewski:gIzZqp8Oag4u37z2@cluster2.lrtqc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
    break;

  default:
    dbURI = 'mongodb://localhost:27017/MyOwnDB';
}

module.exports = { dbURI };
