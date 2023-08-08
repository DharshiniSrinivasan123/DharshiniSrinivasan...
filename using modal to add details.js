// using Modal to add employee details
import React, { useState } from 'react';
import { Modal, Button, View, Text, TextInput, SafeAreaView, StyleSheet, FlatList } from 'react-native';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [employeeid, setEmployeeid] = useState('');
  const [position, setPosition] = useState('');
  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    const newEmployee = { name, phone, employeeid, position };
    setEmployeeList([...employeeList, newEmployee]);
    setShowModal(false);
    setName('');
    setPhone('');
    setEmployeeid('');
    setPosition('');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.modal}>
            <Text style={styles.text}>Add Employee</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone"
              value={phone}
              onChangeText={(text) => setPhone(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Employee ID"
              value={employeeid}
              onChangeText={(text) => setEmployeeid(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Position"
              value={position}
              onChangeText={(text) => setPosition(text)}
            />
            <Button
              title="Add Employee"
              onPress={addEmployee}
            />
            <Button
              title="Close"
              onPress={() => {
                setShowModal(false);
              }}
            />
          </View>
        </Modal>
        <Button
          title="Add Employee"
          onPress={() => {
            setShowModal(true);
          }}
        />
        <FlatList
          data={employeeList}
          renderItem={({ item }) => (
            <View style={styles.employeeItem}>
              <Text>Name: {item.name}</Text>
              <Text>Phone: {item.phone}</Text>
              <Text>Employee ID: {item.employeeid}</Text>
              <Text>Position: {item.position}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginTop: 30,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00ff00',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  employeeItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#fff',
  },
});

export default App;
