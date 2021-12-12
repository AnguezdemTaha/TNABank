import React, { useEffect, useContext, useState } from 'react';
import { FlatList, StatusBar } from 'react-native';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';
import styles from './accountStyle';
import { UserContext } from '../../Context/userContext';
import { baseUrl } from '../../client';
import { Button, AccountInfo, ProfileHeader, Text, View } from '../../Components';

import Header from '../../Components/Header';
import Colors from '../../Constants/Colors';
import { TransferScreen } from '../../Constants/Screens';
import { Account } from '../../types/account';

const AccountScreen = ({ navigation }: any) => {
  const userContext = useContext(UserContext);
  const { userState, userDispatch } = userContext;

  const [accounts, setAccounts] = useState<Account[]>();

  const isFocused = useIsFocused();
  useEffect(() => {
    axios
      .get(`${baseUrl}/users/${userState.id}/accounts`)
      .then((response) => {
        setAccounts(response.data);
      })
      .catch((error) => alert('SERVER ERROR !'));
  }, [isFocused]);

  const handleSubmit = async () => {
    navigation.navigate(TransferScreen);
  };

  const renderItem = (item: { index: number; item: any }) => (
    <AccountInfo userName={userState.name} account={item.item} index={item.index} />
  );

  return (
    <View style={styles.container}>
      <StatusBar animated backgroundColor={Colors.black} />
      <Header navigation={navigation} />
      <ProfileHeader userName={userState.name} />
      <View style={styles.accountList}>
        <Text style={styles.accountsText} variant="title">
          Mes comptes
        </Text>
        <FlatList
          style={styles.scrollContainer}
          data={accounts}
          renderItem={renderItem}
          keyExtractor={(off, index) => index.toString()}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          fullWidth
          style={styles.transferButton}
          color={Colors.secondary}
          onPress={() => handleSubmit()}
        >
          Effectuer un Virement
        </Button>
      </View>
    </View>
  );
};

export default AccountScreen;
