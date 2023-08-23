// Insert
/* const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'flipkart';

async function main() {
  try {
    
    const db = client.db(dbName); // Corrected to use dbName variable
    const collection = db.collection('orders');

    const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4}]);
    console.log(insertResult);
    return 'done.';
  } catch (error) {
    console.error('Error:', error);
    return 'error';
  } 
}

main() */

// find
/* const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'flipkart';

async function main() {
  try {
    
    const db = client.db(dbName); // Corrected to use dbName variable
    const collection = db.collection('orders');

    const filteredDocs = await collection.find({ a: 3 }).toArray();
console.log('Found documents filtered by { a: 3 } =>', filteredDocs);
    return 'done.';
  } catch (error) {
    console.error('Error:', error);
    return 'error';
  } 
}

main() */
//Update
/* const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'flipkart';

async function main() {
  try {
    
    const db = client.db(dbName); // Corrected to use dbName variable
    const collection = db.collection('orders');

    const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
console.log('Updated documents =>', updateResult);
    return 'done.';
  } catch (error) {
    console.error('Error:', error);
    return 'error';
  } 
}

main()  */
//Delete
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'flipkart';

async function main() {
  try {
    
    const db = client.db(dbName); // Corrected to use dbName variable
    const collection = db.collection('orders');

    const deleteResult = await collection.deleteMany({ a: 3 });
console.log('Deleted documents =>', deleteResult);
    return 'done.';
  } catch (error) {
    console.error('Error:', error);
    return 'error';
  } 
}

main()