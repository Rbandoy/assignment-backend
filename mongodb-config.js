const { MongoClient } = require('mongodb'); 

// connection in mongodb server
const url = 'mongodb://localhost:27017';

// database name
const dbName = 'Assignment';

const initMongoose = async () => {
  const client = new MongoClient(url)
  await client.connect() 
  const db = client.db(dbName)

  // collection name
  const collection = db.collection('users')
  return collection
}

module.exports = initMongoose
