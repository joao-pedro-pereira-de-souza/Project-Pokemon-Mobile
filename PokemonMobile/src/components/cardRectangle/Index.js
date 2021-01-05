import React from 'react';
import { View , Text , Image , TouchableOpacity} from 'react-native';
import styles from './Styles'
import {stylesFonts , COLORS , WidthScreen} from '../../Styles';
import Requestion from '../../services/Pokemon/requisitions'


const cardRectangle = ({pokemon}) => {

    const sizeLabel = WidthScreen * 0.04;

    const sizeType = WidthScreen * 0.03;

    const RederImage = () =>{
        /*
        !! Aviso : você pode usar a image original do "pokemon.sprites.front_default" , 
        como o id dos pokémons são iguais não averá problemas em usar a outra plataforma

        */

        const  imgInit = pokemon.sprites.front_default

        const NumericImg = imgInit.replace('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' , '')

        let imgFull = 'https://pokeres.bastionbot.org/images/pokemon/' + NumericImg;

        return imgFull

    }
  return (

        <View style={styles.container}>

            <Image source={{uri: RederImage()}} style={styles.img}/>

            <View style={[styles.contentContainer , {backgroundColor: Requestion.ColorType(pokemon.types[0].type.name)}]}>

                <View style={styles.contentItens}>

                     <Text style={[stylesFonts.labelBold , {color:'#fff' , alignSelf:'center'}]}>{pokemon.name}</Text>
                     
                     <View style={{flexDirection:'row' , marginTop:10}}>
          
                        {pokemon.types.map((types , i) =>{

                        return(
                        
                              <Text  key={i} 

                            style={[ 

                                styles.labelType , 
                                stylesFonts.labelDescBold, 
                                { backgroundColor: Requestion.ColorType(types.type.name) , 
                                fontSize: WidthScreen * 0.027}]}>{ types.type.name }
                                
                                </Text>
                                
                                )

                        })}

                    </View>

                    <View style={{flexDirection:'row' , marginTop:5}}>

                        <View style={{alignItems:'center' , marginRight:6}}>

                            <Text style={[stylesFonts.titleItalic , {color:'#fff' , fontSize: sizeLabel}]}>Weght</Text>

                            <Text style={[stylesFonts.labelDescBold , {color:'#fff' , opacity:0.8 , fontSize:sizeLabel}]}>{pokemon.weight}</Text>

                        </View>

                        <View style={{alignItems:'center'}}>

                            <Text style={[stylesFonts.titleItalic , {color:'#fff' , fontSize:sizeLabel}]}>Height</Text>

                            <Text style={[stylesFonts.labelDescBold , {color:'#fff' , opacity:0.8 , fontSize:sizeLabel}]}>{pokemon.height}</Text>

                        </View>

                    </View>
                    
                    <TouchableOpacity style={styles.buttonVer}>

                        <Text style={[stylesFonts.labelDescBold , {color:'#fff' , fontSize :sizeLabel}]}>Ver mais</Text>

                    </TouchableOpacity>


                </View>

            </View>

        </View>
  
    );

}

export default cardRectangle;