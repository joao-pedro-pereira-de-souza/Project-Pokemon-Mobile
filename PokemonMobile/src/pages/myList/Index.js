import React, { useState , useEffect} from 'react';
import { View , SafeAreaView , TouchableOpacity , Text , FlatList , Image} from 'react-native';

import { Entypo , MaterialIcons} from '@expo/vector-icons';
import styles from './Styles';

import {COLORS , stylesFonts} from '../../Styles';
import {useNavigation} from '@react-navigation/native'
import Options from '../../components/headerOptions/Index';
import CardPokemon from '../../components/cardRectangle/Index';
import RequestionUser from '../../services/User/requisitions'
import ValuesStatic from '../../services/User/valuesStatic'

import Api from '../../services/Pokemon/Api'
const imgLoading = require('../../assets/GifLoading.gif')


const MyList = () => {

  const [isItemList , setIsIttemList] = useState(false);
  const [data , setData] = useState([]);
  const [dataMy , setDataMy] = useState([])
  const [loading , setLoading] = useState(true)
  const Navigation = useNavigation();

  //#region  Api 

useEffect(()=>{

  async function GetList (){

    // Para não consumir muita requisições na Api de usuários (no pacote gratuito pode ser feito 200 requisições por mês )
   const data = await RequestionUser.RefreshMyList(ValuesStatic.DadosUser.user._id)

   setDataMy(data)

    if(dataMy.pokemonsHeart != null){

      await LoadingPokemon(dataMy.pokemonsHeart)

      setIsIttemList(true)
    }
    else{

      setIsIttemList(false)

    }
    //

    setLoading(false)

  }

  GetList()


} , [])

  LoadingPokemon = async (data) =>{
        
    let _pokemonData = await Promise.all(
  
        data.map( async pokemon => {

        let pokemonRecord = await Api.GetPokemon('https://pokeapi.co/api/v2/pokemon/'+ pokemon +'/')

        return pokemonRecord

      })
      
      );

      setData(_pokemonData)

  }

  //#endregion

    const RederItens = (item , index) =>{
     
      return(

        <View style={{margin: 5}}>

          <CardPokemon pokemon={item.item}/>

        </View>


      )
  }

  //#endregion

  if(loading){

    return (
  
        <View style={{flex:1 , backgroundColor: COLORS.Background , alignItems:'center' , justifyContent:'center'}}>
  
          <Image source={ imgLoading } style={{width:300 , height:300}}/>
  
        </View>
    
      )
  }

  else{

    return (

      <View style={styles.container}>
  
            
          <SafeAreaView style={styles.contentTop}>
  
            <TouchableOpacity onPress={() => Navigation.openDrawer()}>
              <Entypo name="menu" size={30} color={COLORS.Coloryellow}/>
            </TouchableOpacity>
  
          </SafeAreaView>
  
          <Text style={[stylesFonts.title , { color:COLORS.Coloryellow , alignSelf:'center' }]}>Minha lista</Text>
  
          <Options/>
  
          {isItemList?
              (
                <FlatList
  
                showsVerticalScrollIndicator={false}
                style={{alignSelf:'center'}}
                data={data}
                renderItem={RederItens}
                keyExtractor={(item , index) => String(index)}
                numColumns={2}
                />
                        
              ):
              (
  
                <Text style={[stylesFonts.labelDescBold ,{color: COLORS.Coloryellow , textAlign:'center' , marginTop:10}]}>Sem Pokémons</Text>
  
              )
            
          }
  
    </View>

      );

  }

}

export default MyList;