import {StyleSheet} from 'react-native'
import {Metrics, ApplicationStyles, Fonts, Colors} from '../../Themes/'


export default StyleSheet.create({
  ...ApplicationStyles.screen,
  loginForm: {
    flex: 1,
    paddingRight: 15,
  },
  formInput: {
    textAlign: 'center',
  },
  bottomSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 40,
  },
  formBtnWrapper: {},
  formBtn: {
    width: 280,
    backgroundColor: Colors.loginBtn,
  },
  button: {
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.bold
  },
  bottomSectionText: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },

})
