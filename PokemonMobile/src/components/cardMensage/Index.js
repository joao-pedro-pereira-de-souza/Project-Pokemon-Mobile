import React from 'react';
import { View , Image , TouchableOpacity , Text} from 'react-native';
import styles from './Styles';
import {WidthScreen , stylesFonts} from '../../Styles';
import {ScrollView} from 'react-native-gesture-handler'
import { FontAwesome } from '@expo/vector-icons';

const cardMensage = (props) => {
  return (
    <TouchableOpacity style={styles.container}>

         <Image  source={props.img} style={styles.img} />

          <View style={{marginLeft: WidthScreen * 0.01 , marginTop: WidthScreen * 0.02 }}>

              <Text style={[stylesFonts.title , { fontSize:25 }]}>{props.name}</Text>

              <View style={{alignItems:'center'}}>

                  <Text style={[stylesFonts.labelDesc ,{opacity: 0.8 ,fontSize:16}]}>Mensagens</Text>

                  <Text style={[stylesFonts.labelDesc ,{opacity: 0.8 ,fontSize:16}]}>6</Text>

              </View>
            

        
          </View>

          <View style={{alignItems:'center' , position:'absolute' , top:8 , right:8}}>
            <Text style={[ stylesFonts.labelBold ]} >2</Text>

            <Text style={[ stylesFonts.labelDescBold ,{ opacity:0.8 , fontSize:13}]} >Participantes</Text>
          </View>


    </TouchableOpacity>
    );
}

export default cardMensage;