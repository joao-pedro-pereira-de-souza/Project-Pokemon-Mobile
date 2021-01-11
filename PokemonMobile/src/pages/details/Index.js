import React,{useEffect , useState} from 'react';

import {ScrollView} from 'react-native-gesture-handler'
import { View , Image , Text , TouchableOpacity} from 'react-native';
import { COLORS , stylesFonts , WidthScreen} from '../../Styles';
import styles from './Styles';
import Api from '../../services/Pokemon/Api'
import { Ionicons , AntDesign , MaterialIcons} from '@expo/vector-icons';
import {CategoryPokeColor} from '../../Styles'
import Requestion from '../../services/Pokemon/requisitions';
import ProgressBar from '../../components/progressBar/Index';

export default function details({route}) {

  const [ data , setData] = useState([])

  const [isHeart , setIsHeart] = useState(false)

  const [loading , setLoading] = useState(true)

  useEffect(() =>{

    async function GetData(){

      await LoadingPokemon([route.params.id])

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
if(loading){

  return <Text>loading....</Text>

}
else{
  return (
      // Aviso!!! 
      // existe duas formas de pegar informações no caminho do array exemplo "data[0].types.[0].type.name" ou assim "data[0]['types'][0]['type']['name'], estou usando as duas formas para mostrar formas diferentes de manipular."
  
    <View style={{flex:1 , backgroundColor: Requestion.ColorType( data[0]['types'][0]['type']['name'] ) }}>
 
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

        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={{alignSelf:'center'}}>
              
              {/*  outra ideia
              
                <FlatList
               
               renderItem={(stat) =>{ 
                 
                return(

                      <View style={{padding:10 , alignItems:'center' ,alignSelf:'center'}} >

                        <Text style={[stylesFonts.labelDesc]}>{stat.item['stat']['name'] + ':'}</Text>

                        <Text style={[stylesFonts.labelDesc]}>{stat.item['base_stat']}</Text>
                        
                      </View>
                  )
              
              }}

               data ={data[0]['stats']}
               keyExtractor={(item , i) => String(i)}
               numColumns={2}
               
               />
              
              */}

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

        </ScrollView>
         
       </View>
 
    </View>
   );
}


}