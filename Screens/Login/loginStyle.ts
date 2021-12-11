import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    minHeight: 150,
    width: 260,
    resizeMode: 'contain',
  },
  loginView: {
    flex: 0.8,
    alignItems: 'center',
    alignContent: 'center',
    maxHeight: 600,
    justifyContent: 'space-around',
  },
  loginInput: {
    width: '100%',
    alignItems: 'center',
    maxWidth: 400,
  },
  errorView: {
    flex: 0.2,
    width: '100%',
    alignItems: 'center',
  },
  inputAccount: {
    marginBottom: 12,
  },
  helperText: {
    fontSize: 15,
    alignSelf: 'center',
    marginBottom: 18,
  },
});

export default styles;
