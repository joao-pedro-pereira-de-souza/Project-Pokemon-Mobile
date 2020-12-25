import {StyleSheet} from 'react-native';
import {WidthScreen , HeightScreen , COLORS} from '../../Styles'

const styles = StyleSheet.create({

    container:{

        width: WidthScreen * 0.14,
        height: WidthScreen * 0.14,
        borderRadius: WidthScreen * 0.14 / 2,
        
        borderWidth:1,
        borderColor: COLORS.Background,

        alignItems:'center',
        justifyContent:'center'

    }
    
});

export default styles