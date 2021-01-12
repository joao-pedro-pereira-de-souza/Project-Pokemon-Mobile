import React,{useEffect , useState} from 'react';

import {ScrollView} from 'react-native-gesture-handler'
import { View , Image , Text , TouchableOpacity} from 'react-native';
import { COLORS , stylesFonts , WidthScreen , HeightScreen} from '../../Styles';
import styles from './Styles';
import Api from '../../services/Pokemon/Api'
import { Ionicons , AntDesign , MaterialIcons} from '@expo/vector-icons';
import {CategoryPokeColor} from '../../Styles'
import * as Animatable from 'react-native-animatable';
import Requestion from '../../services/Pokemon/requisitions';
import ProgressBar from '../../components/progressBar/Index';
import RoutesValue from '../../services/navigation'
import Animated from 'react-native-reanimated';

const imgLoading = require('../../assets/GifLoading.gif')
export default function details({navigation , route}) {

  const [ data , setData] = useState([])

  const [dataDescription , setDataDescription] = useState([])

  const [isHeart , setIsHeart] = useState(false)

  const [loading , setLoading] = useState(true)

  useEffect(() =>{

    async function GetData(){

      await LoadingPokemon([route.params.id])

      let details = await Api.GetPokemon('https://pokeapi.co/api/v2/pokemon-species/'+ route.params.id +'/')

      setDataDescription(details)

      //console.log(dataDescription['id'])

      setLoading(false)

      // console.log(data[0]['stats'])
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

  const verificationPorceLimit = (value) =>{

    if (Number.parseInt(value) > 100) {

      return (
        
        <View style={{flexDirection:'row', marginLeft:5 , alignItems:'center'}}>
         
          <Text style={[stylesFonts.labelDesc]}>{value}</Text>
          <Text style={[stylesFonts.labelDesc , {fontSize: WidthScreen * 0.030 , opacity:0.8}]}>{'(+100%)'}</Text>

        </View>
      
      )
      
    }

    else if(Number.parseInt(value) == 100){

     
      return (
        
        <View style={{flexDirection:'row', marginLeft:5}}>
          
          <Text style={[stylesFonts.labelDesc]}>{value}</Text>
          <Text style={[stylesFonts.labelDesc , {fontSize: WidthScreen * 0.030 , opacity:0.8}]}>{'(100%)'}</Text>

        </View>
      
      )

    }

    else if(Number.parseInt(value) < 100){

     
      return <Text style={[stylesFonts.labelDesc , {marginLeft:5}]}>{value}</Text>

    }

  }

  const RemoveBrText = () =>{

    let text = dataDescription['flavor_text_entries'][0]['flavor_text'].trim();

  
  return text

  }

if(loading){

  return (

      <View style={{flex:1 , backgroundColor: COLORS.Background , alignItems:'center' , justifyContent:'center'}}>

        <Image source={ imgLoading } style={{width:300 , height:300}}/>

      </View>

  
    )

}

else{
  return (
      // Aviso!!! 
      // existe duas formas de pegar informações no caminho do array exemplo "data[0].types.[0].type.name" ou assim "data[0]['types'][0]['type']['name'], estou usando as duas formas para mostrar formas diferentes de manipular."
  
    <View style={{flex:1 , backgroundColor: Requestion.ColorType( data[0]['types'][0]['type']['name'] ) }}>
 
       <View style={styles.containerTop}>

         <View style={styles.headerTop}>

              <TouchableOpacity onPress={() => navigation.openDrawer()}>

                  <Ionicons name="ios-menu" size={26} color="#fff" />
                
              </TouchableOpacity>

              <TouchableOpacity onPress={ModifIsHeart}>

                  <AntDesign name={isHeart ? "heart" : 'hearto'} size={26} color={isHeart ? CategoryPokeColor.ColorFire :"#fff"} />

              </TouchableOpacity>


         </View>

         <Animatable.View animation='slideInDown' style={{zIndex:1}} duration={500}>

          <Image source={{uri : 'https://pokeres.bastionbot.org/images/pokemon/' + route.params.id+ '.png'}} 
            style={ styles.img }/>

         </Animatable.View>
            
       </View>
 
       <View style={styles.contentInfo}>

         <Animatable.View animation='fadeInLeftBig' style={{flex:1}}>

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

            <ScrollView showsVerticalScrollIndicator={false}>

                      <Text style={[stylesFonts.labelDesc , {width:'100%' , marginHorizontal:20 , opacity:0.8 }]}>{RemoveBrText()}</Text>

                      <ScrollView style={{marginVertical:8 , marginLeft:WidthScreen * 0.064}} horizontal showsHorizontalScrollIndicator={false}>

                      {  data[0]['types'].map(types =>{

                            return (

                                <View style={[ styles.typeContent ,{backgroundColor:Requestion.ColorType(types.type.name)}]}>

                                      <Text style={[stylesFonts.labelDescBold]}>{types.type.name}</Text>

                                </View>

                            )

                          }) 
                      
                      
                      }

                      </ScrollView>

                      <View style={{alignSelf:'center'}}>

                        { data[0]['stats'].map( stat =>{

                              return (

                                <>
                                      <View style={{flexDirection:'row'}} >

                                        <Text style={[stylesFonts.labelDesc]}>{stat['stat']['name'] + ':'}</Text>

                                        {verificationPorceLimit( stat['base_stat'] )}
                                        
                                      </View>
                                      <ProgressBar width={stat['base_stat']} colorProgress={ Requestion.ColorType( data[0]['types'][0]['type']['name'] )}/>

                                </>
                                    
                              )

                          })

                        }


                      </View> 

                      <View style={styles.contentPokeList}>

                          <View style={{flexDirection:'row' }}>

                                <Text style={[stylesFonts.labelDesc ,{textAlignVertical:'center' , marginRight:5}]}>{data[0].height}</Text>

                                  <View style={{borderLeftWidth: 3, borderBottomWidth:3 ,borderColor: Requestion.ColorType( data[0]['types'][0]['type']['name'] ) }}>

                                      <Image source={{uri : 'https://pokeres.bastionbot.org/images/pokemon/' + route.params.id+ '.png'}} 
                                            style={ {width:WidthScreen * 0.40, height:WidthScreen * 0.40 }}/>

                                  </View>

                          </View>

                          <Text style={[stylesFonts.labelDesc]}>{data[0].weight}</Text>

                      </View>


             </ScrollView>


         </Animatable.View>

       
       </View>
 
    </View>
   );
}


}