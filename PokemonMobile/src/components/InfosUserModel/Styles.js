import { StyleSheet } from 'react-native'
import {COLORS , WidthScreen , HeightScreen} from '../../Styles'
const styles = StyleSheet.create({
    container:{

        backgroundColor:COLORS.Background,
        width : WidthScreen * 0.90,
        height: HeightScreen * 0.80,
        borderRadius: 20,

        alignItems:'center',
        elevation:10, 

        alignSelf:'center',
        display:'flex',
        marginTop: HeightScreen * 0.10
        

    },

    button:{

        backgroundColor:COLORS.Coloryellow,
        width : '85%',
        height: HeightScreen * 0.07,
        display:'flex',
        borderRadius: 5,
        alignItems:'center',
        justifyContent:'center'

    },
    labelDescConf:{

        alignSelf:'center' , 
        width:'80%', 
        textAlign:'center' , 
        color:'#fff' , 
        marginTop: -20 , 
        maxHeight:HeightScreen * 0.17

    },

    img:{

        width:WidthScreen *0.28 , 
        height: WidthScreen *0.28 , 
        borderRadius: WidthScreen *0.18 , 
        marginLeft: WidthScreen *0.02 , 

        marginTop: WidthScreen * 0.08
        
    } ,

});

export default styles