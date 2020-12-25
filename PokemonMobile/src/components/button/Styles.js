import {StyleSheet} from 'react-native'
import {HeightScreen} from '../../Styles'

const styles = StyleSheet.create({

    container:{

        width:'100%',
        padding: HeightScreen * 0.016,
        borderRadius: HeightScreen * 0.005,

        alignItems:'center',
        justifyContent:'center', 
        elevation:5

    }
});

export default styles