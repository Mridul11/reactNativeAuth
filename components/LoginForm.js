import React, {Component} from 'react';
import firebase from 'firebase';
import {Text, View} from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from './common';


export default class LoginForm extends Component{
  state = {
    email: '',
    password : '',
    error : '',
    loading : false
  }

  onButtonPress(){
      const {email, password} = this.state;

      this.setState({error : ' ', loading : true})
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
                  .then(this.onLoginSuccess.bind(this))
                  .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess(){
    this.setState({loading : false, email :' ', password : ' ', error : ''})
  }

  onLoginFail(){
    this.setState({error : 'Authentication failed.', loading : false})
  }

  renderButton(){
      if(this.state.loading){
        return <Spinner size="small"/>;
      }
      return (
              <Button onPress={this.onButtonPress.bind(this)}>
                  LogIn
              </Button>
      )
  }


  render(){
    return(
          <Card>
            <Input
              label = "Email"
              value = {this.state.text}
              onChangeText = {email => this.setState({ email})}
              placeholder = "Eg: xyz@gmail.com"
            />

            <Input
              label = "password"
              value = {this.state.text}
              onChangeText = {password => this.setState({ password})}
              placeholder = "password"
              type = "password"
              secureTextEntry = {true}
            />

            <Text style={{fontSize:20, alignItems:'center', justifyContent:'center', color:'green'}}>{this.state.error}</Text>

            <View>
                {this.renderButton()}
            </View>
          </Card>
        )
  }
};
