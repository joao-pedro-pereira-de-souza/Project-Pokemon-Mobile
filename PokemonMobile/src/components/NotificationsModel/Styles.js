import { StyleSheet } from 'react-native'
import {COLORS , WidthScreen , HeightScreen} from '../../Styles'
const styles = StyleSheet.create({
    container:{

        backgroundColor:COLORS.Background,
        width : WidthScreen * 0.70,
        height: HeightScreen * 0.60,
        borderRadius: 20,

        alignItems:'center',
        elevation:10, 

        alignSelf:'center',
        display:'flex',
        marginTop: HeightScreen * 0.10
        

    },

    button:{

        backgroundColor:COLORS.Coloryellow,
        width : WidthScreen * 0.42,
        height: HeightScreen * 0.06,
        position:'absolute',
        bottom:15,
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

    }
});

export default styles