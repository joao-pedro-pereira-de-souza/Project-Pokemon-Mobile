import {StyleSheet} from 'react-native'

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
   
    
});

export default styles