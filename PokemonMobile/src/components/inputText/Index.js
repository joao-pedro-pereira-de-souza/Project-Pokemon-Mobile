import React from 'react';
import { View , TextInput} from 'react-native';

import styles from './Styles';
import {COLORS , stylesFonts} from '../../Styles'

const inputText = (props) => {
  return (

    <View style={[styles.container , {backgroundColor: props.bg} ]}>

        <TextInput
        style={[ stylesFonts .label,{opacity:0.8 , color: COLORS.Coloryellow}]}
        placeholderTextColor={props.colorPlace || '#fff'}
        placeholder={props.place}
        value={props.value}
        onChangeText={props.onChange}
        secureTextEntry={props.boolPassword }
        
        
        />

    </View>
  
  
    );
}

export default inputText;

