// create table with name and age
import React from 'react';
import { Button, View, Text, StyleSheet, FlatList } from 'react-native';

const tableData = [
  { id: '1', name: 'John Doe', age: 28, occupation: 'Engineer' },
  { id: '2', name: 'Jane Smith', age: 24, occupation: 'Designer' },
  { id: '3', name: 'Michael Johnson', age: 30, occupation: 'Developer' },
];

function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{item.name}</Text>
      <Text style={styles.tableCell}>{item.age}</Text>
      <Text style={styles.tableCell}>{item.occupation}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details</Text>
      <FlatList
        data={tableData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <View style={styles.tableHeader}>
            <Text style={styles.headerCell}>Name</Text>
            <Text style={styles.headerCell}>Age</Text>
            <Text style={styles.headerCell}>Occupation</Text>
          </View>
        )}
        contentContainerStyle={styles.flatListContent}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#ddd',
    borderRadius: 8,
  },
  headerCell: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    paddingVertical: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    paddingVertical: 10,
  },
  flatListContent: {
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
