import React from 'react';
import { View } from 'react-native';

import {COLORS , WidthScreen} from '../../Styles'

const progressBar = (props) => {

    const widthMaxProgress = WidthScreen * 0.80;

    const ContPorcen = () =>{

        if( Number.parseInt(props.width) >= 100){

            return widthMaxProgress

        }
        else{
            let newValue = widthMaxProgress * Number.parseFloat('0.' + props.width)

            return newValue

        }

    }

  return (

        <View style={{width: widthMaxProgress , backgroundColor:'#F1C242' , height:30 , elevation:1 , marginVertical:5}}>

            <View style={{width: ContPorcen() , height:'100%' , backgroundColor: props.colorProgress }}/>
            
        </View>
  
  );
}

export default progressBar;