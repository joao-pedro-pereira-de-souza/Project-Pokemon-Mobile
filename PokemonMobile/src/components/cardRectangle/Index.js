import React from 'react';
import { View , Text , Image , TouchableOpacity} from 'react-native';
import styles from './Styles'
import {stylesFonts , COLORS , WidthScreen} from '../../Styles';
import Requestion from '../../services/Pokemon/requisitions'
import  RoutesValue from '../../services/navigation'

const cardRectangle = ({pokemon}) => {

    const sizeLabel = WidthScreen * 0.044;

    const Details = () =>{
      
        RoutesValue.routes.navigate('Details' , {id:pokemon.id})

    }
    
  return (

        <View style={styles.container}>

            <Image source={{uri: Requestion.RederNewImage(pokemon.sprites.front_default)}} style={styles.img}/>

            <View style={[styles.contentContainer , {backgroundColor: Requestion.ColorType(pokemon.types[0].type.name)}]}>

                <View style={styles.contentItens}>

                     <Text style={[stylesFonts.labelBold , { alignSelf:'center'}]}>{pokemon.name}</Text>
                     
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

                    <View style={{ marginTop:5 , alignItems:'center'}}>

                        <Text style={[stylesFonts.titleItalic , {fontSize: sizeLabel}]}>{pokemon['base_experience']}</Text>

                        <Text style={[stylesFonts.labelDescBold , {opacity:0.8 , fontSize:sizeLabel}]}>Pontos</Text>

                    </View>
                    
                    <TouchableOpacity style={styles.buttonVer} onPress={ () =>Details()}>

                        <Text style={[stylesFonts.labelDescBold , {fontSize :sizeLabel}]}>Ver mais</Text>

                    </TouchableOpacity>


                </View>

            </View>

        </View>
  
    );

}

export default cardRectangle;