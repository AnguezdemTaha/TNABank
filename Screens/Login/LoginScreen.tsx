import React, { useContext, useState } from 'react';
import { Image, StatusBar } from 'react-native';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { HelperText } from 'react-native-paper';
import Colors from '../../Constants/Colors';
import styles from './loginStyle';
import { baseUrl } from '../../client';
import { Button, TextInput, View } from '../../Components';

import { UserContext } from '../../Context/userContext';
import { AccountScreen } from '../../Constants/Screens';
import { User } from '../../types/user';

const LoginScreen = ({ navigation }: any) => {
  const userContext = useContext(UserContext);
  const { userState, userDispatch } = userContext;

  const [error, setError] = useState(false);
  const [user, setUser] = useState<User>();

  const handleSubmit = async (userLogin: User | undefined) => {
    axios
      .get(`${baseUrl}/users/${userLogin?.id}`)
      .then((response) => {
        if (response.data) {
          setError(false);
          userDispatch({
            type: 'ADD_INFO',
            payload: {
              id: response.data.id,
              name: response.data.nom,
            },
          });
          navigation.navigate(AccountScreen);
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        alert('SERVER ERROR !');
      });
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <StatusBar animated backgroundColor="#000000" />
      <View style={styles.loginView}>
        <Image source={require('../../assets/images/icon.png')} style={styles.logo} />
        <View style={styles.loginInput}>
          <TextInput
            fullWidth
            keyboardType="numeric"
            label="Id du compte"
            color={error ? Colors.error : Colors.primary}
            value={user?.id}
            onChangeText={(id: number) => {
              setUser((prevUser) => ({
                id,
              }));
            }}
            leftIcon={{ name: 'login' }}
            style={styles.accountInput}
          />
          <Button fullWidth color={Colors.primary} onPress={() => handleSubmit(user)}>
            Connexion
          </Button>
        </View>
      </View>
      <View style={styles.errorView}>
        {error && (
          <HelperText type="error" style={styles.helperText}>
            L’id du compte est incorrect
          </HelperText>
        )}
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
