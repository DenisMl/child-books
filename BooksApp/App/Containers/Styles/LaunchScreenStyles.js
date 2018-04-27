import {StyleSheet} from 'react-native'
import {Metrics, ApplicationStyles, Fonts, Colors} from '../../Themes/'


export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  button: {
    marginVertical: 5,
    borderWidth: 2,
    borderColor: Colors.fire,
    backgroundColor: Colors.ember
  },
  buttonText: {
    margin: 18,
    textAlign: 'center',
    color: Colors.snow,
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.bold
  }
})
