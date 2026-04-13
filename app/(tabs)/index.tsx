import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// Komponen Header (Props)
const Header = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Project: {title}</Text>
  </View>
);

export default function App() {
  // STATE
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  // EFFECT
  useEffect(() => {
    console.log('App Mounted');
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Mikael" />

      {/* GREETING FORM */}
      <TextInput
        style={styles.input}
        placeholder="ketik nama lo dude..."
        placeholderTextColor="#666"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text style={styles.result}>
        Halo, {name ? name : '...'} 👋
      </Text>

      {/* COUNTER SYSTEM */}
      <View style={styles.counterContainer}>
        <TouchableOpacity 
          style={styles.counterBtn} 
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.counterText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.counterNumber}>{count}</Text>

        <TouchableOpacity 
          style={styles.counterBtn} 
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.counterText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#000', 
    padding: 20, 
    justifyContent: 'center' 
  },

  header: { 
    marginBottom: 40, 
    borderBottomWidth: 1, 
    borderColor: '#ffff99' 
  },

  headerText: { 
    color: '#ffff99', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },

  input: { 
    backgroundColor: '#111', 
    color: '#fff', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 20, 
    borderWidth: 1, 
    borderColor: '#333' 
  },

  result: { 
    color: '#fff', 
    fontSize: 22, 
    textAlign: 'center', 
    marginBottom: 30 
  },

  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  counterBtn: {
    backgroundColor: '#ffff99',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20
  },

  counterText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },

  counterNumber: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold'
  }
});