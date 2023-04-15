import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import SignIn from './Pages/Signin';
import Signup from './Pages/Signup';


function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}} />
        <Stack.Screen name="SignUp" component={Signup}  options={{headerShown:false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    margin: 10,
  },
});

export default App;
