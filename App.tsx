import React, {useReducer} from 'react';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Screens/Login/LoginScreen';
import AccountScreen from './Screens/Account/AccountScreen';
import {
  UserContextProvider,
  userReducer,
  initialUserState,
} from './Context/userContext';
import TransferScreen from './Screens/Transfer/TransferScreen';

const Stack = createNativeStackNavigator ();

export default function App() {

  const [userState, userDispatch] = useReducer(userReducer, initialUserState);

  return (
      <NavigationContainer>
          <UserContextProvider value={{ userState, userDispatch }}>
              <Stack.Navigator initialRouteName="Home">
                  <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
                  <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ headerShown: false }}/>
                  <Stack.Screen name="TransferScreen" component={TransferScreen} options={{ headerShown: false }}/>
             </Stack.Navigator>
          </UserContextProvider>
      </NavigationContainer>
  );
}

