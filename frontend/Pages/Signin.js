import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import { ref, query, equalTo, once,orderByChild } from 'firebase/database';
// import {db} from '../Firebase/Firebase';

const SignIn = ({navigation}) => {

// const authenticateUser = async (email, password) => {
//   const usersRef = ref(db, 'users/');
//   const emailQuery = query(usersRef, orderByChild('Email'), equalTo(email));

//   try {
//     const snapshot = await once(emailQuery);
//     const user = snapshot.val();

  //   if (!user) {
  //     console.log('No user found with email:', email);
  //     setError('No user found with that email.');
  //     return;
  //   }

  //   if (user.password !== password) {
  //     console.log('Incorrect password');
  //     setError('Incorrect password');
  //     return;
  //   }

  //   console.log('User authenticated:', user.uid);

  //   const userId = user.uid;
  //   const userRef = ref(db, `users/${userId}`);
  //   const userData = await once(userRef);

  //   console.log('User data:', userData.val());

  //   // Process user data
  //   navigation.navigate('Home');
//   } catch (error) {
//     console.error(error);
//     setError('An error occurred. Please try again.');
//   }
// };

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
          //value={email}
            placeholderTextColor={'#fff'}
            placeholder="Email address *"
            style={styles.textinput}
            onChangeText={data => {
              setEmail(data);
            }}
          />
          <TextInput
          //value={password}
            placeholderTextColor={'#fff'}
            placeholder="Password *"
            secureTextEntry={true}
            style={styles.textinput}
            onChangeText={data => {
              setPassword(data);
            }}
          />
          <TouchableOpacity style={styles.button}   onPress={() =>{ navigation.navigate('Home')}}>
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
