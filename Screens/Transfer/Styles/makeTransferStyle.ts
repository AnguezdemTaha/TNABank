import { Dimensions, StyleSheet } from 'react-native';
import Colors from '../../../Constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  accountList: {
    maxHeight: '80%',
  },
  inputLabelAccount: {
    marginTop: 12,
  },
  scrollContainer: {
    flex: 0.5,
    width: '100%',
    marginBottom: 12,
  },
  transferButton: {
    marginTop: 40,
  },
  accountView: {
    width: '90%',
    justifyContent: 'space-between',
    borderBottomColor: 'black',
  },
  creditAccountView: {
    width: '90%',
    justifyContent: 'space-between',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 24,
  },
  accountInfos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: Colors.green,
    borderBottomWidth: 1,
    marginBottom: 24,
  },
  creditAccountInfos: {},
  userName: {
    color: Colors.secondary,
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  accountNum: {
    color: Colors.black,
    fontSize: 14,
    marginLeft: 8,
    alignSelf: 'flex-start',
  },
  accountSold: {
    color: '#345654',
    marginTop: 10,
    flexDirection: 'column-reverse',
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  inputs: {
    width: '90%',
  },
  account: {
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: Colors.green,
    marginBottom: 14,
  },
  cross: {
    position: 'absolute',
    right: 0,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  TouchableOpacity: {
    flex: 1,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '10%',
    height: '70%',
    width: '100%',
    backgroundColor: 'transparent',
  },
  modalView: {
    maxWidth: 600,
    flex: 1,
    width: '95%',
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    marginHorizontal: 15,
  },
  helperText: {
    fontSize: 15,
    alignSelf: 'center',
  },
  popUpOpacity: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    flex: 1,
    // backgroundColor: 'rgba(0,0,0, .4)',
    zIndex: 10,
  },
  popUp: {
    padding: 16,
    width: '80%',
    elevation: 11,
    borderRadius: 10,
    alignContent: 'center',
  },
  rightCode: {
    flexDirection: 'row',
    paddingVertical: 24,
    width: '80%',
  },
  rightCodeText: {
    marginLeft: 5,
    alignSelf: 'center',
  },
});

export default styles;
