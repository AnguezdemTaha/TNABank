import React, { useContext, useState } from 'react';
import { Image, StatusBar } from 'react-native';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { HelperText } from 'react-native-paper';
import Colors from '../../Constants/Colors';
import styles from './loginStyle';
import { baseUrl } from '../../client';
import Button from '../../Components/Button';
import { TextInput, View } from '../../Components';
import { UserContext } from '../../Context/userContext';
import { AccountScreen } from '../../Constants/Screens';

const LoginScreen = ({ navigation }: any) => {
  const userContext = useContext(UserContext);
  const { userState, userDispatch } = userContext;

  const [error, setError] = useState(false);
  const [userId, setUserId] = useState<number>(0);

  const handleSubmit = async (id: number) => {
    axios
      .get(`${baseUrl}/users/${id}`)
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
        setError(true);
      });
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <StatusBar animated backgroundColor="#000000" />
      <View style={styles.loginView}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <View style={styles.loginInput}>
          <TextInput
            fullWidth
            label="Id du compte"
            color={error ? Colors.error : Colors.primary}
            value={userId}
            onChangeText={(id: number) => {
              setUserId(id);
            }}
            leftIcon={{ name: 'login' }}
            style={styles.inputAccount}
          />
          <Button fullWidth color={Colors.primary} onPress={() => handleSubmit(userId)}>
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
