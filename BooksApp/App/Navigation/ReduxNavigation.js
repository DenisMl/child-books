import React from 'react'
import * as ReactNavigation from 'react-navigation'
import {connect} from 'react-redux'
import AppNavigation from './AppNavigation'
import { BackHandler } from "react-native";
import { addNavigationHelpers, NavigationActions } from "react-navigation";

// for react-navigation 1.0.0-beta.30
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const addListener = createReduxBoundAddListener("root");
// end for react-navigation 1.0.0-beta.30

// here is our redux-aware smart component
// function ReduxNavigation(props) {
//   const {dispatch, nav} = props;
//   const navigation = ReactNavigation.addNavigationHelpers({
//     dispatch,
//     state: nav,
//     addListener // <-- fix
//   });
//
//   return <AppNavigation navigation={navigation}/>
// }


class ReduxNavigation extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    const {dispatch, nav} = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const {dispatch, nav} = this.props;
    const navigation = ReactNavigation.addNavigationHelpers({
      dispatch,
      state: nav,
      addListener,
    });

    return <AppNavigation navigation={navigation}/>;
  }
}


const mapStateToProps = state => ({nav: state.nav})
export default connect(mapStateToProps)(ReduxNavigation)
