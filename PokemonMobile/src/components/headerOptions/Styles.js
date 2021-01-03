import {StyleSheet} from 'react-native'
import {WidthScreen , HeightScreen , COLORS} from '../../Styles'
const styles = StyleSheet.create({
   container:{

        marginTop:10,
        flexDirection:'row',
        alignSelf:'center',
        marginBottom:20,
        alignItems:'center'
       
     },
 
     btnTab:{
 
         width: WidthScreen / 5.5,
         flexDirection:'row',
         borderRadius:5,
         padding: 7,
         justifyContent:'center'
 
     },
 
     btnActive:{
         backgroundColor: COLORS.ColorBlue
     },
 
     btnMore:{
 
         backgroundColor: COLORS.ColorBlue,
         width:40,
         height:30,
         alignItems:'center',
         justifyContent:'center',
         borderRadius:5
 
     }
 
});

export default styles