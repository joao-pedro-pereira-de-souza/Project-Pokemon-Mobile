import React from 'react';
import { View , Image , Text} from 'react-native';

import styles from './Styles'
import {COLORS , WidthScreen , stylesFonts , imgPerfil} from '../../Styles'
import { FontAwesome } from '@expo/vector-icons';

const cardPostMensage = (props) => {

    const DirectionBorderRadio = () =>{

        if(props.IsPost){

            return (

                    { 
                        borderTopLeftRadius:20,
                        borderBottomRightRadius:20
                    }
                
                )

        }
        else{

            return(

                {
                    borderBottomLeftRadius:20,
                    borderTopRightRadius:20
                }

            )

        }

    }
  return (

        <View 
        style={[ DirectionBorderRadio() ,styles.container , { 
            
                  backgroundColor : props.IsPost ? COLORS.Coloryellow : COLORS.ColorBlue ,
                  flexDirection:'row'
            
            }]}>

                <View >

                    <Image style={styles.img} source={imgPerfil}/>
                    
                    <Text style={[stylesFonts.labelDesc ,{marginLeft:10  , fontSize:14 , opacity:0.8 , alignSelf:'center'}]}>

                    {props.timePost || '00:00'}

                    </Text>
                    
                </View>

          
            <Text style={[stylesFonts.labelDesc ,{marginLeft:10 , flex:1 , fontSize:14}]}>{props.text}</Text>

        </View>
  
    );
}

export default cardPostMensage;