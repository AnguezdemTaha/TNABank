import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Tabs, View } from '../../Components';
import TransfersHistoryScreen from './TransfersHistoryScreen';
import MakeTransferScreen from './MakeTransferScreen';
import Header from '../../Components/Header';

const TransferScreen = function ({ navigation }: any) {
  const [currentChanges, setCurrentChanges] = useState(false);
  useEffect(() => {
    console.log(currentChanges);
  }, [currentChanges]);
  const screens = useMemo(
    () => [
      {
        title: 'VIREMENT',
        view: MakeTransferScreen,
        params: { navigation, currentChanges, setCurrentChanges },
      },
      {
        title: 'HISTORIQUE',
        view: TransfersHistoryScreen,
        params: { navigation, currentChanges, setCurrentChanges },
      },
    ],
    [currentChanges]
  );

  return (
    <View style={styles.container}>
      <Header withBack navigation={navigation} title="test" />
      <Tabs screens={screens} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default TransferScreen;
