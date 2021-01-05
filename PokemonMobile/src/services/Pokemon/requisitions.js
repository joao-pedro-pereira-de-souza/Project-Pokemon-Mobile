
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

                return '#eccc68'

            case 'poison':

                return '#9b59b6'

            case 'steel':

                return '#7f8c8d'

            case 'fairy':

                return '#e056fds'

            case 'dark':

                return '#3d3d3d'

            default:
                return CategoryPokeColor.ColorNull
        }

    },

    LoadignPokemon: async (data) =>{

     
        
    }

}