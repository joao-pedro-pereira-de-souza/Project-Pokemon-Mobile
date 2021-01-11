import {StyleSheet} from 'react-native'

import {COLORS} from '../../Styles'
const styles = StyleSheet.create({

    containerTop:{

       width:'100%',
       height:220,
 
    },
   
    headerTop:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:20,
        marginHorizontal:20
    },

    contentInfo:{

        backgroundColor: COLORS.Coloryellow,
        flex:1,
        borderTopLeftRadius:60


    },
    headerInfoContent:{
        
        flexDirection:'row' , 
        alignItems:'center'  , 
        marginTop:30 , 
        marginHorizontal:20 , 
        justifyContent:'space-between'
    }

    
    
});

export default styles