import {StyleSheet} from 'react-native'
import {COLORS , WidthScreen , HeightScreen} from '../../Styles'

const styles = StyleSheet.create({
    container:{

        width: WidthScreen * 0.45,
        height: HeightScreen * 0.48,

    },
    contentContainer:{

        width:'100%',
        height:'78%',
        backgroundColor: COLORS.ColorBlue,
        alignItems:'center',
        borderRadius:  HeightScreen * 0.010,

        position:'absolute',
        bottom:0,
        elevation:20,

    },

    contentItens:{

        marginTop: HeightScreen * 0.05,
        alignItems:'center',
        width:'100%'

    },
    img:{
        
        width:WidthScreen *0.30 , 
        height: WidthScreen *0.30 , 
        zIndex:1 , 
        position:'absolute' , 
        top:0,
        alignSelf:'center',
        elevation:20
    },
    buttonVer:{

        width:'90%',
        height: HeightScreen * 0.06,
        elevation:2,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: HeightScreen * 0.01,
         marginTop:10
    },
    labelType:{
        margin:3 , 
        padding:WidthScreen * 0.027 , 
        borderRadius:3 , 
        elevation:5 , 
        color:'#fff',
        
    }
    

});

export default styles