import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    retrieveMessages();
  }, []);

  const retrieveMessages = async () => {
    try {
      const response = await fetch('http:// 192.168.1.27:3001/messages'); // Replace with your server URL
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error retrieving messages:', error);
    }
  };

  const handleSendMessage = async () => {
    if (inputText.trim() === '') {
      return;
    }

    const newMessage = {
      id: messages.length.toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date().toLocaleString(),
    };

    try {
      const response = await fetch('http://192.168.1.27:3000/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMessage),
      });
      if (response.status === 201) {
        setMessages([...messages, newMessage]);
        setInputText('');
      } else {
        console.error('Error sending message:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <ImageBackground source={require('./assets/light.png')} style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.otherMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.timestampText}>{item.timestamp}</Text>
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          placeholder="Type your message..."
        />
        <Icon name="send" size={50} color="red" onPress={handleSendMessage} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 20,
    fontSize: 16,
    backgroundColor: 'lightblue',
  },
  messageContainer: {
    maxWidth: '80%',
    marginVertical: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
  },
  userMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end', // Right-align sender's messages
  },
  otherMessage: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start', // Left-align receiver's messages
  },
  messageText: {
    fontSize: 16,
    color: 'black',
  },
  timestampText: {
    fontSize: 12,
    color: '#888',
    alignSelf: 'flex-end',
  },
});

export default ChatBox;
