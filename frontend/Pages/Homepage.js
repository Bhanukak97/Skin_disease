import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Health App</Text>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('HealthNews')}>
        <Text style={styles.buttonText}>Health News</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('UserProfile')}>
        <Text style={styles.buttonText}>User Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('Prediction')}>
        <Text style={styles.buttonText}>Predictor</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('Help')}>
        <Text style={styles.buttonText}>Help</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  menuButton: {
    backgroundColor: '#5f9ea0',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Home;
