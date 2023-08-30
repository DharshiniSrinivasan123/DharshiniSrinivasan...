const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb'); // Import MongoClient from mongodb library

const app = express();
const PORT = process.env.PORT || 3000;

const mongoURL = 'mongodb://localhost:27017';
const dbName = 'chatapp';
const collectionName = 'chat';

app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const client = new MongoClient(mongoURL, { useUnifiedTopology: true });
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const user = await collection.findOne({ username, password });
    if (user) {
      client.close();
      return res.json({ message: 'Login successful' });
    } else {
      client.close();
      return res.status(401).json({ message: 'Login failed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
});
