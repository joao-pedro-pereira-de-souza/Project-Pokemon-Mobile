import React from 'react';
import { View , Image , TouchableOpacity} from 'react-native';
import styles from './Styles'

const cardRectangle02 = (props) => {
  return (

    <TouchableOpacity style={styles.container}>

        <Image  source={{ uri: props.img}} style={styles.img} resizeMode='contain'/>

        <View style={styles.content}>

        </View>

    </TouchableOpacity>

  );
}

export default cardRectangle02;