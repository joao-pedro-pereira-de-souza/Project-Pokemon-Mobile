import {StyleSheet} from 'react-native'
import {COLORS , WidthScreen , HeightScreen} from '../../Styles'

const styles = StyleSheet.create({
    container:{

        width: WidthScreen * 0.40,
        height: HeightScreen * 0.40,
     
    },
    contentContainer:{

        width:'100%',
        height:'80%',
        backgroundColor: COLORS.ColorBlue,
        alignItems:'center',
        borderRadius:  HeightScreen * 0.010,

        position:'absolute',
        bottom:0

    },

    contentItens:{

        marginTop: HeightScreen * 0.09,

    },
    img:{
        
        width:WidthScreen *0.30 , 
        height: WidthScreen *0.30 , 
        zIndex:1 , 
        position:'absolute' , 
        alignSelf:'center'
    }

});

export default styles