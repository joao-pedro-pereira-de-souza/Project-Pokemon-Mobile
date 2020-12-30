import {StyleSheet} from 'react-native'
import { color } from 'react-native-reanimated';
import {COLORS , HeightScreen} from '../../Styles'
const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: COLORS.Background
    },
    contentTop:{

        marginTop:HeightScreen * 0.02,
        marginLeft:10

    },
    contentTitle:{
        flexDirection:'row',
        marginTop:HeightScreen * 0.002,
        alignItems:'center',
        paddingVertical:10,
        
    },
    contentSearch:{
        width:'90%',
        marginTop:10

    },
    contentOrdem:{
        marginTop:10,
        flexDirection:'row', 
        alignItems:'center',
        paddingVertical:10,
    }
    
});

export default styles