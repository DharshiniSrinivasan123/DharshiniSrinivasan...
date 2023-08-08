// Chat box using sender and receiver in right and left side
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';


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
    };

    setMessages([...messages, newMessage]);
    setInputText('');
  };

  return (
    <ImageBackground
      style={styles.imgBackground}
      resizeMode='cover'
      source={require('./assets/pikachu.png')} 
    >
      <View style={styles.container}>
      <Text style={styles.header}>DHARSHINI</Text>

        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.messageContainer,
                item.sender === 'bot' ? styles.leftMessage : styles.rightMessage,
              ]}
            >
              <Text style={styles.messageText}>{item.text}</Text>
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
          <Button title="SENDER" onPress={() => handleSendMessage('user')} />
          <Button title="RECEIVER" onPress={() => handleSendMessage('bot')} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 8,
  },
  header: {
    color: "Black",
    backgroundColor: "blue",
    padding: 30,
    fontFamily: "sans-serif",
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    marginRight: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  messageContainer: {
    maxWidth: '80%',
    marginVertical: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  messageText: {
    fontSize: 16,
  },
  leftMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'red',
  },
  rightMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007aff',
    color: 'white',
  },
  imgBackground: {
  

    width: '100%',
    height: '100%',
    flex: 1,
  },
});

export default ChatBox;




