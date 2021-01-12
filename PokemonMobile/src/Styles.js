import { Dimensions , StyleSheet } from 'react-native';

export const { width:WidthScreen , height:HeightScreen } = Dimensions.get('window');

export const LOGO = require('./assets/phanpyRight.png')

export const imgPerfil = require('./assets/perfil.jpg')

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
    ColorBug: '#7bed9f',
    ColorNormal: '#dfe6e9',
    ColorPoison: '#33336B',
    ColorSteel: '#7f8c8d',
    ColorFairy:'#ffb8b8',
    ColorGround: '#A9702C',
    ColorRock: '#48180B' ,
    ColorIce: '#66D1E5' ,
    ColorFighting: '#f0932b',
    ColorGhost: '#5E2D88' ,
    ColorFlying:'#448A95',
    ColorNull : '#ced6e0'

}

export const stylesFonts = StyleSheet.create({

    title:{

        fontFamily:'BalsamiqSans_700Bold',
        fontSize: WidthScreen * 0.09 ,
        color:'#fff'

    },
    titleItalic:{

        fontFamily:'BalsamiqSans_700Bold_Italic',
        fontSize: WidthScreen * 0.09,
        color:'#fff'
    },
    label:{

        fontFamily:'BalsamiqSans_400Regular',
        fontSize: WidthScreen * 0.055,
        color:'#fff'
    },
    labelDesc:{

        fontFamily:'BalsamiqSans_400Regular',
        fontSize: WidthScreen * 0.05,
        color:'#fff'
    },

    labelBold:{

        fontFamily:'BalsamiqSans_700Bold',
        fontSize: WidthScreen * 0.055,
        color:'#fff'

    },
    labelDescBold:{

        fontFamily:'BalsamiqSans_700Bold',
        fontSize: WidthScreen * 0.05,
        color:'#fff'

    }
    
});