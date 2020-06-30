import { StyleSheet, Dimensions } from 'react-native';
import { colors } from 'constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  topContainer: {
    height: (Dimensions.get('screen').height * 65) / 100,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  bottomContainer: {
    flex: 0,
    alignItems: 'center',
    height: (Dimensions.get('screen').height * 30) / 100,
    padding: 20,
  },
  imgLogo: {
    height: 150,
    width: 150,
  },
  contents: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    paddingTop: 10,
    color: colors.white,
    fontFamily: 'Raleway-Bold',
    fontSize: 20,
  },
  description: {
    color: colors.white,
    fontSize: 20,
    fontFamily: 'Raleway-Regular',
  },
  pageText: {
    color: colors.white,
    fontSize: 30,
    fontFamily: 'Raleway-Bold',
    paddingTop: 20,
    textAlign: 'center',
  },
  inputText: {
    width: '100%',
    height: 50,
    marginTop: 20,
    paddingHorizontal: 30,
    borderRadius: 15,
    backgroundColor: colors.white,
    fontSize: 20,
    color: colors.orange,
  },
  underline: {
    paddingTop: 15,
    color: colors.orange,
    textDecorationLine: 'underline',
  },
  eyeIcon: {
    height: 30,
    width: 30,
  },
  pictureContainer: {
    height: 140,
    width: 140,
    borderRadius: 15,
    borderWidth: 5,
    borderColor: colors.orange,
    backgroundColor: colors.white,
    marginTop: 10,
  },
  picture: {
    height: 130,
    width: 130,
  },
});
