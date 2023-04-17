import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import {child, push, ref, set} from 'firebase/database';
import {db} from '../Firebase/Firebase';

const UserProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [images, setImages] = useState([]);

  const handleImageUpload = () => {
    // Add logic to upload images
  };

  useEffect(()=>{

  },[])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <TouchableOpacity onPress={handleImageUpload}>
            <Text style={styles.uploadText}>Upload Profile Image</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.imagesContainer}>
        {images.map((image) => (
          <Image source={{ uri: image }} key={image} style={styles.image} />
        ))}
      </View>
      <View style={styles.accountSetupContainer}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>Account Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>Privacy Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  uploadText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  formContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 10,
  },
  accountSetupContainer: {
    borderTopWidth: 1,
    borderColor: 'gray',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  menuButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
});

export default UserProfile;
