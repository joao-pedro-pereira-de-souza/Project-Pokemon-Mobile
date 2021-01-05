import { Dimensions , StyleSheet } from 'react-native';

export const { width:WidthScreen , height:HeightScreen } = Dimensions.get('window');

export const LOGO = require('./assets/phanpyRight.png')

export const COLORS = 
{
    Background:'#3D3D3D',
    Coloryellow: '#FACF5A',
    ColorBlue:'#6FA6A8'
}

export const CategoryPokeColor = 
{

    ColorWater:'#17c0eb',
    ColorDragon:'#8A55FD',
    ColorFire:'#FF5959',
    ColorDark:'#4b4b4b',
    ColorElectric:'#f1c40f',
    ColorPsychic: '#1abc9c',
    ColorEarth:'#926438',
    ColorGrass:'#2CB978',
    ColorNull : '#ced6e0',
    ColorBug: '#7bed9f',

}

export const stylesFonts = StyleSheet.create({

    title:{

        fontFamily:'BalsamiqSans_700Bold',
        fontSize: WidthScreen * 0.09

    },
    titleItalic:{

        fontFamily:'BalsamiqSans_700Bold_Italic',
        fontSize: WidthScreen * 0.09

    },
    label:{

        fontFamily:'BalsamiqSans_400Regular',
        fontSize: WidthScreen * 0.055

    },
    labelDesc:{

        fontFamily:'BalsamiqSans_400Regular',
        fontSize: WidthScreen * 0.05

    },

    labelBold:{

        fontFamily:'BalsamiqSans_700Bold',
        fontSize: WidthScreen * 0.055

    },
    labelDescBold:{

        fontFamily:'BalsamiqSans_700Bold',
        fontSize: WidthScreen * 0.05

    }
    
});