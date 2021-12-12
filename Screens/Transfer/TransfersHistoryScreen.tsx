import React, { useEffect, useContext, useState } from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import moment from 'moment';
import axios from 'axios';
import styles from './Styles/transfersHistoryStyle';
import { baseUrl } from '../../client';
import { ProfileHeader, Text } from '../../Components';
import { UserContext } from '../../Context/userContext';
import { Transfer } from '../../types/transfer';
import Colors from '../../Constants/Colors';

const TransfersHistoryScreen = ({ route }: any) => {
  const userContext = useContext(UserContext);
  const { userState, userDispatch } = userContext;

  const { currentChanges } = route.params;

  const [transfers, setTransfers] = useState<Transfer[]>();

  useEffect(() => {
    axios.get(`${baseUrl}/users/${userState.id}/transfers`).then((response) => {
      setTransfers(response.data);
    }).catch((error) => {
      alert('SERVER ERROR !');
    });
  }, [currentChanges]);

  const renderItem = (item: { index: number; item: any }) => (
    <View style={styles.transferView} key={item.index}>
      <View style={styles.transferInfos}>
        <Text textAlign="left" style={styles.transferDate}>
          {moment(item.item.date).format('DD/MM/YYYY/HH:mm')}
        </Text>
        <Text style={styles.accountNum}> {item.item.to.accountNumber} </Text>
      </View>
      <Text style={styles.amount}> {item.item.amount} MAD</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar animated backgroundColor={Colors.black} />
      <ProfileHeader userName={userState.name} />
      <View style={styles.transferList}>
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
