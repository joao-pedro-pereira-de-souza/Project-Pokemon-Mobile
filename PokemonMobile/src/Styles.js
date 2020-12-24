import { Dimensions , StyleSheet } from 'react-native';

export const { width:WidthScreen , height:HeightScreen } = Dimensions.get('window');

export const COLORS = 
{
    Background:'#3D3D3D',
    Coloryellow: '#FACF5A',
    ColorBlue:'#6FA6A8'
}

export const CategoryPokeColor = 
{

    ColorWater:'#FACF5A',
    ColorFire:'#FF5959',
    ColorEarth:'#926438',
    ColorPlant:'#2CB978'

}

export const stylesFonts = StyleSheet.create({

    title:{

        fontFamily:'BalsamiqSans_700Bold',
        fontSize: WidthScreen * 0.07

    },
    titleItalic:{

        fontFamily:'BalsamiqSans_700Bold_Italic',
        fontSize: WidthScreen * 0.07

    },
    label:{

        fontFamily:'BalsamiqSans_400Regular',
        fontSize: WidthScreen * 0.06

    },
    labelDesc:{

        fontFamily:'BalsamiqSans_400Regular',
        fontSize: WidthScreen * 0.05

    }
    
});