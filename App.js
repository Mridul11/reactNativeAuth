import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import key from './keys/key';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';


export default class App extends Component {

  state = {loggedIn : null};

  componentWillMount(){
    firebase.initializeApp({
                          apiKey: key.firebaseKey,
                          authDomain: "authentication-6da28.firebaseapp.com",
                          databaseURL: "https://authentication-6da28.firebaseio.com",
                          projectId: "authentication-6da28",
                          storageBucket: "authentication-6da28.appspot.com",
                          messagingSenderId: "59000947789"
                        });

    firebase.auth().onAuthStateChanged((user) =>{
                      if(user){
                        this.setState({loggedIn : true});
                      } else{
                        this.setState({loggedIn : false});
                      }
                              });
            }

renderLoginForm(){
    switch(this.state.loggedIn){
      case true :
        return <Button
        onPress={() => firebase.auth().signOut()}
        >
        Logout
        </Button>;
      case false :
        return <LoginForm />;
      default :
      return <Spinner size="large"/>;
    }
  }


  render() {
  return(  <View>
              <Header headerName="Authentication"/>
              {this.renderLoginForm()}
          </View>
        )
  }
};
