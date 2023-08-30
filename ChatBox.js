import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    retrieveMessages();
  }, []);

  const retrieveMessages = async () => {
    try {
      const savedMessages = await AsyncStorage.getItem('messages');
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      }
    } catch (error) {
      console.error('Error retrieving messages:', error);
    }
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') {
      return;
    }

    const newMessage = {
      id: messages.length.toString(),
      text: inputText,
      sender: 'user', // In a real scenario, you might use actual sender data here
      timestamp: new Date().toLocaleString(),
    };

    const updatedMessages = [...messages, newMessage];
    saveMessages(updatedMessages);

    setMessages(updatedMessages);
    setInputText('');
  };

  const saveMessages = async (messagesToSave) => {
    try {
      await AsyncStorage.setItem('messages', JSON.stringify(messagesToSave));
    } catch (error) {
      console.error('Error saving messages:', error);
    }
  };

  return (
    <ImageBackground source={require('./assets/light.png')} style={styles.container}>
      {/* FlatList to display messages */}
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

      {/* Input field and send button */}
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
    resizeMode: 'cover', // Make the image cover the entire container
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: 'white', // White background for the input bar
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 20,
    fontSize: 16,
    backgroundColor: 'lightblue', // Input background color
  },
  messageContainer: {
    maxWidth: '80%',
    marginVertical: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    alignSelf: 'flex-start', // Messages are aligned to the left
  },
  userMessage: {
    backgroundColor: '#DCF8C6', // Light green background for user messages
    alignSelf: 'flex-end', // User's messages are aligned to the right
  },
  otherMessage: {
    backgroundColor: '#FFFFFF', // White background for other messages
  },
  messageText: {
    fontSize: 16,
    color: 'black', // Message text color
  },
  timestampText: {
    fontSize: 12,
    color: '#888',
    alignSelf: 'flex-end',
  },
});

export default ChatBox;
