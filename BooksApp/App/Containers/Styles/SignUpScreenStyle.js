import {StyleSheet} from 'react-native'
import {Metrics, ApplicationStyles, Fonts, Colors} from '../../Themes/'


export default StyleSheet.create({
  ...ApplicationStyles.screen,
  loginForm: {
    flex: 1,
    paddingRight: 15,
  },
  bottomSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop:40,
    marginHorizontal: 16,
  },
  formBtnWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  formBtn: {
    width: 160,
  },
  button: {
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.bold
  },
  bottomSectionText: {
    width: 160,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',

  },
  link: {
    color: Colors.link,
    marginLeft: 20,
  },


})
