// Fetch date and time to send and receive the messages in the chatbox
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, ImageBackground } from 'react-native';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = (sender) => {
    if (inputText.trim() === '') {
      return;
    }

    const newMessage = {
      id: messages.length.toString(),
      text: inputText,
      sender: sender,
      timestamp: new Date().toLocaleString(),
    };

    setMessages([...messages, newMessage]);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        resizeMode='cover'
        source={require('./assets/pikachu.png')}
      >
        <Text style={styles.header}>DHARSHINI</Text>

        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.messageContainer,
                item.sender === 'receiver' ? styles.leftMessage : styles.rightMessage,
              ]}
            >
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
          <Button title="SENDER" onPress={() => handleSendMessage('sender')} />
          <Button title="RECEIVER" onPress={() => handleSendMessage('receiver')} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Background color of the container
  },
  imgBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 8,
  },
  header: {
    color: 'black',
    backgroundColor: 'blue',
    padding: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  input: {
    flex: 1,
    marginRight: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    fontSize: 16,
  },
  messageContainer: {
    maxWidth: '80%',
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
  },
  messageText: {
    fontSize: 16,
  },
  timestampText: {
    fontSize: 12,
    color: '#888',
    alignSelf: 'flex-end',
  },
  leftMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f5f5f5',
  },
  rightMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007aff',
    color: 'white',
  },
});

export default ChatBox;
