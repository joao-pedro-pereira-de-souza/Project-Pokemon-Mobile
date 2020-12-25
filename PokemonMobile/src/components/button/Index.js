import React from 'react';
import { TouchableOpacity , Text } from 'react-native';
import styles from './Styles'
import {COLORS , stylesFonts} from '../../Styles';

const button = (props) => {
  return (
  
    <TouchableOpacity style={[styles.container , {backgroundColor: props.bg || COLORS.Coloryellow}]}>

        <Text style={[stylesFonts.labelBold , { color: props.color || '#fff'}]}>{props.text}</Text>

    </TouchableOpacity>
  
    );
}

export default button;