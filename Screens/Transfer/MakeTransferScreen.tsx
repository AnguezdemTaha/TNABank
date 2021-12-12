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
import { Transfer } from '../../types/transfer';
import { Account } from '../../types/account';

const MakeTransferScreen = ({ route }: any) => {
  const userContext = useContext(UserContext);
  const { userState, userDispatch } = userContext;

  const { currentChanges, setCurrentChanges } = route.params;

  const [showValidationPopUp, setShowValidationPopUp] = useState(false);
  const [showAccountList, setShowAccountList] = useState(false);

  const [accounts, setAccounts] = useState([]);
  const [choosedAccount, setChoosedAccount] = useState<Account>();
  const [transferInfos, setTransferInfos] = useState<Transfer>();

  const [error, setError] = useState(false);

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

  const accountListModal = (
    <Modal
      animationType="slide"
      transparent
      visible={showAccountList}
      onRequestClose={() => {
        setShowAccountList(!showAccountList);
      }}
    >
      <TouchableOpacity
        style={styles.TouchableOpacity}
        activeOpacity={1}
        onPressOut={() => {
          setShowAccountList(false);
        }}
      >
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback>
            <View style={[styles.modalView]}>
              <Entypo
                style={styles.cross}
                name="cross"
                size={24}
                color="black"
                onPress={() => setShowAccountList(!showAccountList)}
              />
              <FlatList
                style={styles.scrollContainer}
                data={accounts}
                renderItem={renderItem}
                keyExtractor={(off, index) => index.toString()}
              />
              <Button
                fullWidth
                color={Colors.secondary}
                onPress={() => setShowAccountList(!showAccountList)}
              >
                Annuler
              </Button>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    </Modal>
  );

  useEffect(() => {
    axios.get(`${baseUrl}/users/${userState.id}/accounts`).then((response) => {
      setAccounts(response.data);
      setChoosedAccount(response.data[0]);
      setTransferInfos((prevTransactionInfos) => ({
        ...prevTransactionInfos,
        from: response.data[0],
      }));
    }).catch((error) => {
      alert('SERVER ERROR !');
    });
  }, [currentChanges]);

  const handleSubmit = async () => {
    axios
      .post(`${baseUrl}/transfer`, transferInfos)
      .then((response) => {
        if (response.data) {
          setError(false);
          setShowValidationPopUp(true);
          setTransferInfos((prevTransactionInfos) => ({
            ...prevTransactionInfos,
            id: NaN,
            amount: NaN,
            label: '',
          }));
          setCurrentChanges(new Date());
        } else {
          setError(true);
        }
      })
      .catch((error) => {
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
    setShowAccountList(false);
  };

  const chooseDebitAccount = () => {
    setShowAccountList(true);
  };

  const cancelPopUp = () => {
    setShowValidationPopUp(false);
  };

  const validationPopUp = (
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

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <StatusBar animated backgroundColor={Colors.black} />
        {accountListModal}
        {showValidationPopUp && validationPopUp}
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
              keyboardType="numeric"
              color={Colors.primary}
              value={transferInfos?.to?.id}
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
              keyboardType="numeric"
              label="Montant"
              color={Colors.primary}
              value={transferInfos?.amount}
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
              label="Label"
              color={Colors.primary}
              value={transferInfos?.label}
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
