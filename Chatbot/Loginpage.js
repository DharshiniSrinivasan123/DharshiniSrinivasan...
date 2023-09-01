import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.1.27:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        console.log('Login successful');
        navigation.navigate('ChatBox');
      } else {
        const errorData = await response.json();
        console.log('Login failed:', errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <ImageBackground
      source={require('./assets/light.png')} // Change the path to your image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('SignUpPage')}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 100,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  signupButton: {
    marginTop: 10,
  },
  signupButtonText: {
    color: 'black',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default LoginPage;

