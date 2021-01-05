import {StyleSheet} from 'react-native';
import {WidthScreen , HeightScreen , COLORS} from '../../Styles';

const styles = StyleSheet.create({

    container:{
       
        width: 300,
        height: HeightScreen * 0.18,
        
    },
    content:{
        width:'88%',
        height:'100%',

        backgroundColor: COLORS.ColorBlue,
        borderRadius:  HeightScreen * 0.02,
        position:'absolute',
        right:0,
        flexDirection:'row',
       
        
    },
    img:{

        width:WidthScreen *0.30 , 
        height: WidthScreen *0.30 , 
        zIndex:1 , 
        position:'absolute' , 
        left:0
        
    } ,
    
    button:{

        width:WidthScreen *0.10 , 
        height: WidthScreen *0.10 , 
        backgroundColor:'#fff',
        borderRadius: WidthScreen *0.10 /2 ,
        alignItems:'center',
        justifyContent:'center',

        position:'absolute',
        top:7,
        right:7
        

    }
});

export default styles