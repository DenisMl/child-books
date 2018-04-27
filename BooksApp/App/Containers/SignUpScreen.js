import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Image, View} from 'react-native'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

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

// Styles
import styles from './Styles/SignUpScreenStyle'
import Colors from "../Themes/Colors";

class SignUpScreen extends Component {
  render() {
    return (
      <Container style={styles.mainContainer}>
        <Header>
          <Body>
          <Title>Sign Up</Title>
          </Body>
        </Header>
        <Content padder>
          <Form style={styles.loginForm}>
            <Item style={styles.formItem}>
              <Input placeholder="Username" placeholderTextColor={Colors.placeholder}/>
            </Item>
            <Item style={styles.formItem}>
              <Input placeholder="Email" placeholderTextColor={Colors.placeholder}/>
            </Item>
            <Item style={styles.formItem}>
              <Input placeholder="Password" placeholderTextColor={Colors.placeholder}/>
            </Item>
          </Form>
          <View style={styles.bottomSection}>
            <View style={styles.formBtnWrapper}>
              <Button style={styles.formBtn} success block><Text style={styles.button}>Sign up</Text></Button>
              <View style={styles.bottomSectionText}>
                <Text style={styles.link}
                      onPress={() => this.props.navigation.navigate('LoginScreen')}
                >Already registered?</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
