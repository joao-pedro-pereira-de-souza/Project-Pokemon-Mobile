import {StyleSheet} from 'react-native';
import {WidthScreen , HeightScreen , COLORS} from '../../Styles';

const styles = StyleSheet.create({

    container:{
       
        width: 300,
        height: HeightScreen * 0.20,
        
    },
    content:{
        width:'80%',
        height:'100%',

        backgroundColor: COLORS.ColorBlue,
        borderRadius:  HeightScreen * 0.02,
        position:'absolute',
        right:0
        
    },
    img:{

        width:WidthScreen *0.25 , 
        height: WidthScreen *0.25 , 
        zIndex:1 , 
        position:'absolute' , 
        left:0
        
    } 
});

export default styles