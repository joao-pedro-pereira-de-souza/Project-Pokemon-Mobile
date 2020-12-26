import {StyleSheet} from 'react-native'
import {COLORS  , HeightScreen , WidthScreen} from '../../Styles'
const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: COLORS.Background
    },

    header:{
        marginTop: HeightScreen * 0.030,
        marginLeft:10
    },
    contentInfo:{

        marginTop: HeightScreen * 0.002,
        marginLeft: WidthScreen * 0.060
    

    },
    footer:{
        width:'100%',
        height: WidthScreen * 0.35,
        position:'absolute',
        bottom:0,

        elevation:5,

    },
    imgFooter:{

        width: WidthScreen * 0.45 , 
        height: HeightScreen * 0.22 , 
        zIndex:1 , 
        position:'relative' , 
        bottom: HeightScreen * 0.02, 
        left:-10

    },
    contentFooter:{
        width:'100%' ,
        height:'85%' , 
        backgroundColor: COLORS.Coloryellow, 
        position:'absolute' , 
        bottom:0
    },
    contentFooterInfo:{

        position:'absolute',
        right:WidthScreen * 0.10,
        marginTop: HeightScreen * 0.01,
        alignItems:'center'

    },
    contentFooterListButton:{

        flexDirection:'row',
        marginTop:HeightScreen * 0.01

    }
    
});

export default styles