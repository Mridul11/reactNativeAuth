import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Header = (props) =>{
  return(
        <View style={styles.ViewStyle}>
            <Text style={styles.textStyle}>{props.headerName}!</Text>
        </View>
  )
};

const styles = {
  ViewStyle : {

    height : 60,
    marginTop: 35,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor : '#000',
    shadowOpacity : 0.2,
    elevation : 2,
    position : 'relative',
  },
  textStyle : {
      fontSize : 30,
  }
};

export {Header};
