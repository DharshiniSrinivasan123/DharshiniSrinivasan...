const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// MongoDB connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'chatapp';

// Middleware to handle user authentication
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Connect to MongoDB
  const client = new MongoClient(url);

  try {
    await client.connect();

    const db = client.db(dbName);
    const users = db.collection('chat');

    // Find the user by username and password
    const user = await users.findOne({ username, password });

    if (!user) {
      console.log('User not found');
      return res.status(401).json({ error: 'Login failed' });
    }

    console.log('User found:', user);

    // Authentication successful
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

// Middleware to handle sending messages
app.post('/save', async (req, res) => {
  const { sender, receiver, message } = req.body;

  // Connect to MongoDB
  const client = new MongoClient(url);

  try {
    await client.connect();

    const db = client.db(dbName);
    const chatCollection = db.collection('save');

    // Find the chat document based on sender and receiver
    const chat = await chatCollection.findOne({
      $or: [
        { sender, receiver },
        { sender: receiver, receiver: sender },
      ],
    });

    if (!chat) {
      // Create a new chat document if it doesn't exist
      const newChat = {
        sender,
        receiver,
        messages: [{ sender, message }],
      };
      await chatCollection.insertOne(newChat);

      console.log('New chat created:', newChat);
    } else {
      // Add the message to the existing chat document
      await chatCollection.updateOne(
        { _id: chat._id },
        { $push: { messages: { sender, message } } }
      );

      console.log('Message added to chat:', chat);
    }

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
