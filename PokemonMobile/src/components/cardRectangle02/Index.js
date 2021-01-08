import React from 'react';
import { View , Image , TouchableOpacity , Text} from 'react-native';
import styles from './Styles';
import {WidthScreen , stylesFonts} from '../../Styles';
import { FontAwesome } from '@expo/vector-icons';

const cardRectangle02 = (props) => {
  return (

    <TouchableOpacity style={styles.container}>

        <Image  source={{ uri: props.img}} style={styles.img} resizeMode='contain'/>

        <View style={styles.content}>

          <View style={{marginLeft: WidthScreen * 0.18 , marginTop: WidthScreen * 0.02 }}>

              <Text style={[stylesFonts.title , { fontSize:25}]}>{props.name}</Text>

              <Text  style={[stylesFonts.labelDesc , { opacity: 0.8 , fontSize:11, width:120}]}>
                No momento os detalhes do pokémon ainda está sendo desenvolvido
              </Text>

          </View>

          <View style={{alignItems:'center' , position:'absolute' , bottom:8 , right:8}}>
            <Text style={[ stylesFonts.labelBold ]} >---</Text>

            <Text style={[ stylesFonts.labelDescBold ,{ opacity:0.8 , fontSize:13}]} >Points</Text>
          </View>


          <TouchableOpacity style={styles.button}>

             <FontAwesome name="close" size={13} color="black" />

          </TouchableOpacity>

        </View>

    </TouchableOpacity>

  );
}

export default cardRectangle02;