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
const SignIn = ({navigation}) => {
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
            placeholderTextColor={'#fff'}
            placeholder="Email address *"
            style={styles.textinput}
          />
          <TextInput
            placeholderTextColor={'#fff'}
            placeholder="Password *"
            secureTextEntry={true}
            style={styles.textinput}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.signupButton}>
          <Text
            style={styles.signupText}
            onPress={() => navigation.navigate('SignUp')}>
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
