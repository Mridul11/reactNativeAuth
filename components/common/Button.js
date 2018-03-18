import React from 'react';
import {Text , TouchableOpacity} from 'react-native';

const Button = (props) =>{
  return (
    <TouchableOpacity style={styles.btnStyle} onPress={props.onPress}>
       <Text>{props.children}</Text>
    </TouchableOpacity>
  )
};

const styles = {
  btnStyle : {
    height : 30,
    width : 355,
    padding: 3,
    justifyContent:'center',
    alignItems:'center',
    borderColor: 'green',
    borderRadius: 3,
    borderWidth: 1,
    marginTop : 2,
    marginLeft: 3
  }
}
export {Button};
