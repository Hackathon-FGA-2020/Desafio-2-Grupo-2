import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2F4FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    flexDirection: 'row',
    position: 'absolute',
    top: Constants.statusBarHeight + 15,
    left: 15,
  },

  title: {
    fontSize: 28,
    color: '#aaa',
    marginHorizontal: 60,
    fontFamily: 'Champagne',
  },

  instruction: {
    fontSize: 24,
    paddingBottom: 15,
    fontFamily: 'Champagne',
  },

  form: {
    backgroundColor: '#FFF',
    marginVertical: 20,
    paddingVertical: 30,
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 10,
    width: '85%',
  },

  subTitles: {
    fontSize: 20,
    fontFamily: 'Champagne',
  },

  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    marginVertical: 10,
    borderRadius: 10,
    height: 40,
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    height: 40,
  },

  text: {
    color: 'black',
    fontSize: 20,
    marginLeft: 5,
    marginBottom: 10,
    fontFamily: 'ChampagneBold',
  },

  create: {
    backgroundColor: '#1671A7',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '25%',
    marginTop: 10,
    padding: 10,
    borderRadius: 30,
  },

  text2: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Champagne',
  },
});
