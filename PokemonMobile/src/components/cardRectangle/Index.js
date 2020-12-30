import React from 'react';
import { View , Text , Image} from 'react-native';
import styles from './Styles'
import {stylesFonts , COLORS , WidthScreen} from '../../Styles'

const cardRectangle = (props) => {
  return (

        <View style={styles.container}>

            <Image source={{ uri: props.img}} style={styles.img}/>

            <View style={styles.contentContainer}>

                <View style={styles.contentItens}>

                     <Text style={[stylesFonts.labelBold , {color:'#fff'}]}>{props.name}</Text>

                     <View style={{alignItems:'center' , marginTop:10}}>

                        <Text style={[stylesFonts.title , {color:'#fff'}]}>---</Text>

                        <Text style={[stylesFonts.labelDescBold , {color:'#fff' , opacity:0.8}]}>Points</Text>

                     </View>

                  
                </View>

            </View>

        </View>
  
    );

}

export default cardRectangle;