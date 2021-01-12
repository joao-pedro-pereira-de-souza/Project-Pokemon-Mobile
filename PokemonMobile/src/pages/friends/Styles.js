import {StyleSheet} from 'react-native'

import {COLORS , WidthScreen , HeightScreen} from '../../Styles'

const marginespace = WidthScreen * 0.064;

const styles = StyleSheet.create({

     Container:{
         flex:1,
         backgroundColor: COLORS.Background
     },

     containerOption:{

        marginTop:30,
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center'
       
     },
 
     btnTab:{
 
         width: WidthScreen / 2.5,
         height: HeightScreen * 0.07,
         flexDirection:'row',
         borderRadius:5,
         
         justifyContent:'center',
         alignItems:'center'
 
     },
 
     btnActive:{
         backgroundColor: COLORS.ColorBlue
     },
 

    
});

export default styles