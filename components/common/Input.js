import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {

    const {inputStyle, labelStyle, containerStyle} = styles ;
    console.log(label)
    return(
      <View style={containerStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
            style ={inputStyle}
            value = {value}
            onChangeText = {onChangeText}
            placeholder = {placeholder}
            autoCorrect = {false}
            secureTextEntry = {secureTextEntry}
        />
      </View>
    )
};

const styles = {
    inputStyle : {
        color : '#000',
        paddingRight : 5,
        paddingLeft : 5,
        fontSize: 18,
        lineHeight : 23,
        flex : 2,
        width : 100,
        height : 30,
        borderColor : 'green',
        borderWidth : 1,
        borderRadius : 4,

    },
    labelStyle : {
        fontSize : 18,
        paddingLeft : 20,
        flex :1,
        width : 10,
        height : 20,
        color : 'black'
    },
    containerStyle : {
        height : 40,
        flex :1,
        flexDirection : 'row',
        alignItems : 'center',
        margin : 15,
    }
}

export {Input};
