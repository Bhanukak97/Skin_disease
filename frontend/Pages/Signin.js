import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Firebase/Firebase';

const SignIn = ({navigation}) => {
const[email,setEmail]= useState('')
const[password, setPassword]= useState('')
const[error,setError] =useState('')

//const auth = getAuth();

//Function to authenticate the user
function authenticateUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User authenticated successfully
      const user = userCredential.user;
      console.log('User authenticated:', user.uid);

      // Retrieve user data from the database
      const userId = user.uid;
      const userRef = ref(db, 'users/' + userId);
      onValue(userRef, (snapshot) => {
        const userData = snapshot.val();
        console.log('User data:', userData);
        // Process user data
      }, (error) => {
        console.error(error);
      });
    })
    .catch((error) => {
      // Handle authentication errors
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage)
      console.error(errorCode, errorMessage);
    });
}


  return (
    <View style={styles.maincontainer}>
      <View style={styles.topView}>
        <Image
          style={styles.image}
          source={require('../Assets/Images/logo.png')}
        />
      </View>
      <ScrollView style={styles.bottomView}>
        <Text style={styles.bottomHeading}>
          Welcome{'\n'}
          Back
        </Text>
        <View style={styles.formView}>
          <TextInput
          value={email}
            placeholderTextColor={'#fff'}
            placeholder="Email address *"
            style={styles.textinput}
            onChangeText={data => {
              setEmail(data);
            }}
          />
          <TextInput
          value={password}
            placeholderTextColor={'#fff'}
            placeholder="Password *"
            secureTextEntry={true}
            style={styles.textinput}
            onChangeText={data => {
              setPassword(data);
            }}
          />
          <TouchableOpacity style={styles.button}   onPress={() =>{error?null: navigation.navigate('Home'),authenticateUser(email,password)}}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.signupButton} onPress={()=>{navigation.navigate('SignUp')}}>
          <Text style={styles.signupText}>
            Sign up
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topView: {
    width: '100%',
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    width: '100%',
    height: '70%',
    backgroundColor: '#000',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  image: {
    width: '150%',
    resizeMode: 'contain',
  },
  bottomHeading: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 40,
  },
  textinput: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#fff',
    height: 52,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
    color: '#fff',
  },
  formView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    width: '90%',
    backgroundColor: '#fff',
    height: 52,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  signupText: {
    color: 'gray',
    fontSize:18
  },
  signupButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
  },
});

export default SignIn;
