import {StyleSheet} from 'react-native';
import {WidthScreen , HeightScreen , COLORS} from '../../Styles';

const styles = StyleSheet.create({

    container:{
       
        width: 300,
        height: HeightScreen * 0.189,
        backgroundColor: COLORS.Coloryellow,
        borderRadius:  HeightScreen * 0.02,

        flexDirection:'row',
        marginVertical:5
        
    },

    img:{

        width:WidthScreen *0.18 , 
        height: WidthScreen *0.18 , 
        borderRadius: WidthScreen *0.18 , 
        marginLeft: WidthScreen *0.02 , 

        marginTop: WidthScreen * 0.02
        
    } ,

    imgPoke:{

        width:WidthScreen *0.10 , 
        height: WidthScreen *0.10 , 
        borderRadius: WidthScreen *0.10 , 
        marginLeft: WidthScreen *0.02 , 

        marginTop: WidthScreen * 0.02,
        elevation:3
       
    } ,
    
   
});

export default styles