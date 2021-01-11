import React,{useEffect , useState} from 'react';

import {ScrollView} from 'react-native-gesture-handler'
import { View , Image , Text , TouchableOpacity} from 'react-native';
import { COLORS , stylesFonts} from '../../Styles';
import styles from './Styles';
import Api from '../../services/Pokemon/Api'
import { Ionicons , AntDesign , MaterialIcons} from '@expo/vector-icons';
import {CategoryPokeColor} from '../../Styles'
import Requestion from '../../services/Pokemon/requisitions'

export default function details({route}) {

  const [ data , setData] = useState([])

  const [isHeart , setIsHeart] = useState(false)

  const [loading , setLoading] = useState(true)


  useEffect(() =>{

    async function GetData(){

      await LoadingPokemon([route.params.id])

      setLoading(false)

    }

    GetData()


  },[])

  LoadingPokemon = async (data)=>{

    let _pokemonData = await Promise.all(
  
      data.map( async pokemon => {

      let pokemonRecord = await Api.GetPokemon('https://pokeapi.co/api/v2/pokemon/'+ pokemon +'/')

      return pokemonRecord

    })
    
    );

    setData(_pokemonData)

  }

  const ModifIsHeart = () =>{
    setIsHeart(heart => !heart);
  }

if(loading){

  return <Text>loading....</Text>

}
else{
  return (
      // Aviso!!! 
      // existe duas formas de pegar informações no caminho do array exemplo "data[0].types.[0].type.name" ou assim "data[0]['types'][0]['type']['name'], estou usando as duas formas para mostrar formas diferentes de manipular."
  
    <View style={{flex:1 , backgroundColor: Requestion.ColorType( data[0]['types'][0]['type']['name'] )}}>
 
       <View style={styles.containerTop}>

         <View style={styles.headerTop}>

              <TouchableOpacity>

                  <Ionicons name="ios-menu" size={26} color="#fff" />
                
              </TouchableOpacity>

              <TouchableOpacity onPress={ModifIsHeart}>

                  <AntDesign name={isHeart ? "heart" : 'hearto'} size={26} color={isHeart ? CategoryPokeColor.ColorFire :"#fff"} />

              </TouchableOpacity>


         </View>
 
           <Image source={{uri : 'https://pokeres.bastionbot.org/images/pokemon/' + route.params.id+ '.png'}} style={{width:180 , height:180 , zIndex:1 , alignSelf:'center' , marginTop:20}}/>
            

       </View>
 
       <View style={styles.contentInfo}>

         <View style={styles.headerInfoContent}>

              <View style={{flexDirection:'row' , alignItems:'center' }}>

                    <Text style={[stylesFonts.titleItalic]} >{data[0]['name']}</Text>

                    <MaterialIcons style={{marginTop:8}} name="keyboard-arrow-right" size={40} color="#fff" />

              </View>
              
                <View style={{alignItems:'center'}}>

                      <Text style={[stylesFonts.title]} >{data[0]['base_experience']}</Text>
                      <Text style={[stylesFonts.labelDesc , {opacity:0.8}]} >Pontos</Text>                

                </View>

         </View>

          <View>
            
          </View>
       </View>
 
    </View>
   );
}


}