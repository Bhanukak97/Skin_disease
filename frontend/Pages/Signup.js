import React, {useState} from 'react';
import BanckIcon from 'react-native-vector-icons/Feather';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {child, push, ref, set} from 'firebase/database';
import {db} from '../Firebase/Firebase';

const Signup = ({navigation}) => {
  const [firtName, setFirtName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [confirmaPassword, setConfirmaPassword] = useState('');

  function create() {
    const userId = push(child(ref(db),'users')).key
    set(ref(db, 'users/' + userId), {
      Firt_Name: firtName,
      Last_Name: lastName,
      Email: email,
      Country: country,
      Password: password,
    })
      .then(() => {
        alert('Data added successfully');
      })
      .catch(error => {
        alert(error);
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
        <BanckIcon
          onPress={() => {
            navigation.navigate('SignIn');
          }}
          style={styles.backIcon}
          name="chevron-left"
          size={50}
          color={'#fff'}
        />
        <Text style={styles.bottomHeading}>Create Account</Text>
        <View style={styles.formView}>
          <TextInput
            value={firtName}
            placeholderTextColor={'#fff'}
            placeholder="First Name *"
            style={styles.textinput}
            onChangeText={data => {
              setFirtName(data);
            }}
          />
          <TextInput
            value={lastName}
            placeholderTextColor={'#fff'}
            placeholder="Last Name*"
            style={styles.textinput}
            onChangeText={data => {
              setLastName(data);
            }}
          />
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
            value={country}
            placeholderTextColor={'#fff'}
            placeholder="Country *"
            style={styles.textinput}
            onChangeText={data => {
              setCountry(data);
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
          <TextInput
            value={confirmaPassword}
            placeholderTextColor={'#fff'}
            placeholder="Confirm Password *"
            secureTextEntry={true}
            style={styles.textinput}
            onChangeText={data => {
              setConfirmaPassword(data);
            }}
          />
          <TouchableOpacity style={styles.button} onPress={create}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
    height: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    width: '100%',
    height: '90%',
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
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
    marginTop: 10,
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
  backIcon: {
    marginLeft: 5,
    marginTop: 10,
  },
});

export default Signup;
