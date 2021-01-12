import React from 'react';
import { View , Image , TouchableOpacity , Text} from 'react-native';
import styles from './Styles';
import {WidthScreen , stylesFonts} from '../../Styles';
import {ScrollView} from 'react-native-gesture-handler'
import { FontAwesome } from '@expo/vector-icons';

const cardRectangle02 = (props) => {
  
  return (

    <TouchableOpacity style={styles.container}>

         <Image  source={props.img} style={styles.img} />

          <View style={{marginLeft: WidthScreen * 0.01 , marginTop: WidthScreen * 0.02 }}>

              <Text style={[stylesFonts.title , { fontSize:25 }]}>{props.name}</Text>
              <Text style={[stylesFonts.labelDesc ,{opacity: 0.8 ,fontSize:16}]}>Pokémons</Text>

              <ScrollView horizontal >

                  <Image  source={props.img} style={styles.imgPoke} />
                  <Image  source={props.img} style={styles.imgPoke} />
                  <Image  source={props.img} style={styles.imgPoke} />
                  <Image  source={props.img} style={styles.imgPoke} />

              </ScrollView>

          </View>

          <View style={{alignItems:'center' , position:'absolute' , top:8 , right:8}}>
            <Text style={[ stylesFonts.labelBold ]} >200</Text>

            <Text style={[ stylesFonts.labelDescBold ,{ opacity:0.8 , fontSize:13}]} >seguidores</Text>
          </View>


    </TouchableOpacity>

  );
}

export default cardRectangle02;