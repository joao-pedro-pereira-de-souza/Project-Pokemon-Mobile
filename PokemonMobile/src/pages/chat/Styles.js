import {StyleSheet} from 'react-native'
import {COLORS , WidthScreen , HeightScreen} from '../../Styles'

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: COLORS.Background

    },

    contentInfo:{

        height:150

    },

    contentChat:{

        flex:1

    },
    contentChatMensage:{

        flex:1,
        backgroundColor:COLORS.Coloryellow

    },
    contentChatForm:{

        paddingTop:10,
        paddingBottom:25,

        flexDirection:'row',
        alignItems:'center'

    },
    buttonMensage:{
        width: WidthScreen * 0.15,
        height:  WidthScreen * 0.15,
        borderRadius: WidthScreen * 0.01,

        backgroundColor:COLORS.Coloryellow,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10
    },
    img:{
        width:WidthScreen *0.18 , 
        height: WidthScreen *0.18 , 
        borderRadius: WidthScreen *0.18 , 
        marginLeft: WidthScreen *0.02 , 

        marginTop: WidthScreen * 0.02
    }
});

export default styles