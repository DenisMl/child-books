import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Image, View, TextInput} from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Input,
  Label
} from 'native-base';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import styles from './Styles/LoginScreenStyle'
import Colors from "../Themes/Colors";

class LoginScreen extends Component {
  render() {
    return (
      <Container style={styles.mainContainer}>
        <Header>
          <Body>
          <Title>Login</Title>
          </Body>
        </Header>
        <Content padder>
          <Form style={styles.loginForm}>
            <Item style={styles.formItem}>
              <Input style={styles.formInput} placeholder="Username or Email" placeholderTextColor={Colors.placeholder}/>
            </Item>
            <Item style={styles.formItem}>
              <Input style={styles.formInput} placeholder="Password" placeholderTextColor={Colors.placeholder}/>
            </Item>
          </Form>
          <View style={styles.bottomSection}>
            <View style={styles.formBtnWrapper}>
              <Button style={styles.formBtn} primary block rounded><Text style={styles.button}>Log in</Text></Button>
              <View style={styles.bottomSectionText}>

                <Text style={styles.grayText}>Don't have an account? </Text>
                <Text style={styles.link}
                      onPress={() => this.props.navigation.navigate('SignUpScreen')}
                >Get started!</Text>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
