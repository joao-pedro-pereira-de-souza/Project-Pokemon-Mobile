import React from 'react';
import { TouchableOpacity } from 'react-native';

import { EvilIcons } from '@expo/vector-icons';
import styles from './Styles'
import { WidthScreen } from '../../Styles';

const buttonCicleIcon = (props) => {

    const IconButton =()=>{
        if(props.Icon){

            return(
                <props.Icon name={props.nameIcon} size={WidthScreen * 0.08} color={props.colorIcon || '#fff'}/>
            )

        }else{

            return(

                <EvilIcons name="image" size={WidthScreen * 0.08} color="#fff" />

            )
        }
    }
  return (
  
    <TouchableOpacity style={styles.container}>

        <IconButton/>

    </TouchableOpacity>
  
);
}

export default buttonCicleIcon;