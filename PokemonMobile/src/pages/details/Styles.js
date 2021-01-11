import {StyleSheet} from 'react-native'

import {COLORS , WidthScreen , HeightScreen} from '../../Styles'

const marginespace = WidthScreen * 0.064;
const styles = StyleSheet.create({

    containerTop:{

       width:'100%',
       height:HeightScreen * 0.33,
 
    },
   
    headerTop:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:marginespace,
        marginHorizontal:marginespace
    },

    img:{

        width:180 , 
        height:180 , 
        zIndex:1 , 
        alignSelf:'center' , 
        marginTop:marginespace

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
        marginHorizontal:marginespace , 
        justifyContent:'space-between'
    }, 
    typeContent:{

        marginRight:5, 
        borderRadius:5 , 
        alignItems:'center' , 
        justifyContent:'center' , 
        padding:10

    },

    contentPokeList:{
        width:'80%',
        height: HeightScreen * 0.40,
        borderRadius:  HeightScreen * 0.02,
        elevation:5,
        backgroundColor:'#F1C242',
        alignSelf:'center',
        marginVertical: marginespace,

        display:'flex',

        alignItems:'center',
        justifyContent:'center'
    }

    
    
});

export default styles