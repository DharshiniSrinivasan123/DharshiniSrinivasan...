const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3000;
const url = 'mongodb://localhost:27017';

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
  } else {
    console.log('Connected to MongoDB');

    process.on('SIGINT', () => {
      client.close();
      console.log('MongoDB connection closed');
      process.exit();
    });
  }
});

app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const db = client.db('chatapp');
    const collection = db.collection('chat');

    const user = await collection.findOne({ username, password });

    if (user) {
      res.sendStatus(200); // Login successful
    } else {
      res.sendStatus(401); // Unauthorized
    }
  } catch (error) {
    console.error('Error:', error);
    res.sendStatus(500); // Internal Server Error
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// Insert the data to the momngoDB and connect with backend