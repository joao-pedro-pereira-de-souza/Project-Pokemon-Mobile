
import React, {useState} from 'react'
import {CategoryPokeColor} from '../../Styles'
import Api from './Api'

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

                return CategoryPokeColor.ColorBug

            case 'normal':

                return CategoryPokeColor.ColorNormal

            case 'poison':

                return CategoryPokeColor.ColorPoison

            case 'steel':

                return CategoryPokeColor.ColorSteel

            case 'fairy':

                return CategoryPokeColor.ColorFairy

            case 'dark':

                return CategoryPokeColor.ColorDark

            case 'dragon':

                return CategoryPokeColor.ColorDragon

            case 'ground':

                return CategoryPokeColor.ColorGround

            case 'rock':

                return CategoryPokeColor.ColorRock

            case 'ice':

                return CategoryPokeColor.ColorIce


            case 'fighting':

                return CategoryPokeColor.ColorFighting

            case 'ghost':

                return CategoryPokeColor.ColorGhost

            case 'flying':

                return CategoryPokeColor.ColorFlying

            default:
                return CategoryPokeColor.ColorNull
        }

    },

    RederNewImage: (url) =>{

        /*
        !! Aviso : você pode usar a image original do "pokemon.sprites.front_default" , 
        como o id dos pokémons são iguais não averá problemas em usar a outra plataforma

        */

        let Numeric = url.replace('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' , '');

        return 'https://pokeres.bastionbot.org/images/pokemon/' + Numeric

    },
  

}

