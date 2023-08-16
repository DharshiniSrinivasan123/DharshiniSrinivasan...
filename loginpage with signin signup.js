//create login page with sign in and sing up
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleAction = () => {
    if (isSigningUp) {
      console.log('Sign up logic here');
      // Implement sign-up logic here
    } else {
      console.log('Login logic here');
      // Implement login logic here
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{isSigningUp ? 'Sign Up' : 'Login'}</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleAction}>
        <Text style={styles.buttonText}>{isSigningUp ? 'Sign Up' : 'Login'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.switchButton}
        onPress={() => setIsSigningUp(!isSigningUp)}
      >
        <Text style={styles.switchButtonText}>
          {isSigningUp ? 'Switch to Login' : 'Switch to Sign Up'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
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
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  switchButton: {
    marginTop: 20,
  },
  switchButtonText: {
    color: '#007bff',
    fontSize: 16,
  },
});

export default LoginPage;
