
import {CategoryPokeColor} from '../../Styles'
export default {

    ColorType: (type) => {

        switch (type) {

            case 'fire': 
                
                return CategoryPokeColor.ColorFire

            case 'grass': 

                return CategoryPokeColor.ColorGrass

            case 'water': 

                return CategoryPokeColor.ColorWater


            case 'electric': 

                return CategoryPokeColor.ColorElectric

            case 'psychic': 

                return CategoryPokeColor.ColorPsychic

            case 'bug':

                return '#7bed9f'

            case 'normal':

                return '#dfe6e9'

            case 'poison':

                return '#33336B'

            case 'steel':

                return '#7f8c8d'

            case 'fairy':

                return '#ffb8b8'

            case 'dark':

                return '#4b4b4b'

            case 'dragon':

                return CategoryPokeColor.ColorDragon

            case 'ground':

                return '#A9702C'

            case 'rock':

                return '#48180B'

            case 'ice':

                return '#66D1E5'


            case 'fighting':

                return '#f0932b'

            case 'ghost':

                return '#5E2D88'

            case 'flying':

                return '#448A95'

            default:
                return CategoryPokeColor.ColorNull
        }

    },

    LoadignPokemon: async (data) =>{

     
        
    }

}