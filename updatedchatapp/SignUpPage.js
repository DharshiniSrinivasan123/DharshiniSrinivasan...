import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // In a real app, you would typically make an API call to sign up the user
    // This is a mock implementation for demonstration purposes
    console.log('Sign up:', { name, email, phone, password });
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Simple phone number validation (just checking length)
    return phoneNumber.length === 10;
  };

  return (
    <ImageBackground
      source={require('./assets/light.png')} // Update the path to your background image
      style={styles.backgroundImage}
    >
      <View style={styles.signupContainer}>
        <Text style={styles.header}>Sign Up</Text>
        <View style={styles.formGroup}>
          <Text>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.formGroup}>
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.formGroup}>
          <Text>Phone Number</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
          />
          {phone && !validatePhoneNumber(phone) && <Text style={styles.error}>Invalid phone number</Text>}
        </View>
        <View style={styles.formGroup}>
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          {password && password.length < 6 && <Text style={styles.error}>Password must be at least 6 characters</Text>}
        </View>
        <Button title="Sign Up" onPress={handleSignUp} />
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
  signupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white', // Set the text color for the header
  },
  formGroup: {
    marginBottom: 15,
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white', // Set the background color for the input
  },
  error: {
    color: 'red',
  },
});

export default SignUpPage;
