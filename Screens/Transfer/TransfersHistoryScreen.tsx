import React, { useMemo, useEffect, useContext, useState } from 'react';
import { FlatList, Image, StatusBar, TouchableOpacity, View } from 'react-native';
import moment from 'moment';
import axios from 'axios';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './Styles/transfersHistoryStyle';
import { baseUrl } from '../../client';
import { AccountInfo, ProfileHeader, Text } from '../../Components';
import Button from '../../Components/Button';
import { UserContext } from '../../Context/userContext';

const TransfersHistoryScreen = ({ route }: any) => {
  const userContext = useContext(UserContext);
  const { userState, userDispatch } = userContext;

  const { currentChanges } = route.params;

  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/users/${userState.id}/transfers`).then((response) => {
      setTransfers(response.data);
    });
  }, [currentChanges]);

  const renderItem = (item: { index: number; item: any }) => (
    <View style={styles.accountView} key={item.index}>
      <View style={styles.accountInfos}>
        <Text textAlign="left" style={styles.transferDate}>
          {moment(item.item.date).format('DD/MM/YYYY/HH:mm')}
        </Text>
        <Text style={styles.accountNum}> {item.item.to.accountNumber} </Text>
      </View>
      <Text style={styles.accountSold}> {item.item.amount} MAD</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar animated backgroundColor="#000000" />
      <ProfileHeader userName={userState.name} />
      <View style={styles.accountList}>
        <FlatList
          style={styles.scrollContainer}
          data={transfers}
          renderItem={renderItem}
          keyExtractor={(off, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default TransfersHistoryScreen;
