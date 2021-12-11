import React, { useEffect, useContext, useState } from 'react';
import {
  FlatList,
  Modal,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import axios from 'axios';
import { AntDesign, Entypo, Octicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { HelperText } from 'react-native-paper';
import styles from './Styles/makeTransferStyle';
import { UserContext } from '../../Context/userContext';
import { baseUrl } from '../../client';
import { AccountInfo, ProfileHeader, Text, TextInput, View } from '../../Components';
import Button from '../../Components/Button';
import Colors from '../../Constants/Colors';

const MakeTransferScreen = ({ route }: any) => {
  const userContext = useContext(UserContext);
  const { userState, userDispatch } = userContext;

  const [showPopUp, setShowPopUp] = useState(false);

  const { currentChanges, setCurrentChanges } = route.params;

  const [accounts, setAccounts] = useState([]);
  const [choosedAccount, setChoosedAccount] = useState({ accountNumber: 0, sold: 0 });
  // TODO: object transfer in types
  const initialTransaction = {
    from: {
      id: 0,
    },
    to: {
      id: 0,
    },
    amount: 0,
    label: '',
  };
  const [transferInfos, setTransferInfos] = useState(initialTransaction);

  const [error, setError] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    axios.get(`${baseUrl}/users/${userState.id}/accounts`).then((response) => {
      setAccounts(response.data);
      setChoosedAccount(response.data[0]);
      setTransferInfos((prevTransactionInfos) => ({
        ...prevTransactionInfos,
        from: response.data[0],
      }));
    });
  }, [currentChanges]);

  const handleSubmit = async () => {
    console.log('transfer1 :', transferInfos);
    axios
      .post(`${baseUrl}/transfer`, transferInfos)
      .then((response) => {
        console.log('transfer :', response.data);
        if (response.data) {
          setError(false);
          setShowPopUp(true);
          setTransferInfos(initialTransaction);
          setCurrentChanges(new Date());
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        // TODO:
        alert('SERVER ERROR !!');
      });
  };

  const handlePress = (account: any) => {
    setChoosedAccount(account);
    setTransferInfos((prevTransactionInfos) => ({
      ...prevTransactionInfos,
      from: {
        id: account.id,
        sold: account.sold,
      },
    }));
    setVisible(false);
  };

  const chooseDebitAccount = () => {
    setVisible(true);
  };

  const cancelPopUp = () => {
    setShowPopUp(false);
  };

  const popUp = (
    <TouchableOpacity style={styles.popUpOpacity} onPress={cancelPopUp}>
      <View style={styles.popUp}>
        <View style={styles.rightCode}>
          <Octicons name="verified" size={60} color="green" />
          <Text variant="subTitle" textAlign="left" style={styles.rightCodeText}>
            Vous avez effectuer votre virement avec succé.
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = (item: { index: number; item: any }) => (
    <AccountInfo
      userName={userState.name}
      account={item.item}
      index={item.index}
      setValue={(account) => {
        handlePress(account);
      }}
    />
  );
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <StatusBar animated backgroundColor={Colors.black} />
        <Modal
          animationType="slide"
          transparent
          visible={visible}
          onRequestClose={() => {
            setVisible(!visible);
          }}
        >
          <TouchableOpacity
            style={styles.TouchableOpacity}
            activeOpacity={1}
            onPressOut={() => {
              setVisible(false);
            }}
          >
            <View style={styles.centeredView}>
              <TouchableWithoutFeedback>
                <View style={[styles.modalView, { backgroundColor: '#FFFFFF' }]}>
                  <Entypo
                    style={styles.cross}
                    name="cross"
                    size={24}
                    color="black"
                    onPress={() => setVisible(!visible)}
                  />
                  <FlatList
                    style={styles.scrollContainer}
                    data={accounts}
                    renderItem={renderItem}
                    keyExtractor={(off, index) => index.toString()}
                  />
                  <Button fullWidth color={Colors.secondary} onPress={() => setVisible(!visible)}>
                    Annuler
                  </Button>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableOpacity>
        </Modal>
        {showPopUp && popUp}
        <ProfileHeader userName={userState.name} />
        <View style={styles.form}>
          <View style={styles.accountView}>
            <Text textAlign="left" style={styles.account}>
              Compte à debéter
            </Text>
            <View style={styles.accountInfos}>
              <View>
                <Text textAlign="left" style={styles.userName}>
                  Monsieur {userState.name.toUpperCase()}{' '}
                </Text>
                <Text style={styles.accountNum}> {choosedAccount?.accountNumber} </Text>
              </View>

              <View>
                <AntDesign
                  name="caretdown"
                  size={24}
                  color={Colors.green}
                  onPress={() => chooseDebitAccount()}
                />
                <Text style={styles.accountSold}> {choosedAccount?.sold} MAD </Text>
              </View>
            </View>
          </View>
          <View style={styles.creditAccountView}>
            <Text textAlign="left" style={styles.account}>
              Compte à crediter
            </Text>
            <TextInput
              fullWidth
              label="ID compte"
              color="#222222"
              value={transferInfos.to.id}
              onChangeText={(id: number) => {
                setTransferInfos((prevTransactionInfos) => ({
                  ...prevTransactionInfos,
                  to: {
                    id,
                  },
                }));
              }}
              leftIcon={{ name: 'perm-identity' }}
            />
          </View>
          <View style={styles.inputs}>
            <TextInput
              fullWidth
              label="montant"
              color="#222222"
              value={transferInfos.amount}
              onChangeText={(amount: number) => {
                setTransferInfos((prevTransactionInfos) => ({
                  ...prevTransactionInfos,
                  amount,
                }));
              }}
              leftIcon={{ name: 'attach-money' }}
            />
            <TextInput
              fullWidth
              label="label"
              color="#222222"
              value={transferInfos.label}
              onChangeText={(label: string) => {
                setTransferInfos((prevTransactionInfos) => ({
                  ...prevTransactionInfos,
                  label,
                }));
              }}
              leftIcon={{ name: 'label' }}
              style={styles.inputLabelAccount}
            />
            <Button
              fullWidth
              style={styles.transferButton}
              color={Colors.secondary}
              onPress={() => handleSubmit()}
            >
              Suivant
            </Button>
            {error && (
              <HelperText type="error" style={styles.helperText}>
                Les informations sont incorrectes
              </HelperText>
            )}
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default MakeTransferScreen;
