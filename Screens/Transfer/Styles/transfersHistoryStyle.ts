import { StyleSheet } from 'react-native';
import Colors from '../../../Constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
  },
  transferList: {
    width: '100%',
    alignItems: 'center',
  },
  scrollContainer: {
    width: '80%',
  },

  transferView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
    width: '100%',
  },
  transferInfos: {},
  transferDate: {
    fontSize: 14,
    color: '#345654',
  },
  accountNum: {
    color: Colors.black,
    fontSize: 14,
    marginLeft: 8,
  },
  amount: {
    color: Colors.black,
  },
});

export default styles;
