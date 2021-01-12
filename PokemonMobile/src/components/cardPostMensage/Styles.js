import { StyleSheet } from "react-native";
import {WidthScreen} from '../../Styles'
const styles = StyleSheet.create({
    container:{

        maxWidth:300,
        padding:10,
        elevation:5,

    },
    img:{

        width:WidthScreen *0.15 , 
        height: WidthScreen *0.15 , 
        borderRadius: WidthScreen *0.15 , 
        marginLeft: WidthScreen *0.02 , 

        marginTop: WidthScreen * 0.02  
        
    } ,


});

export default styles;