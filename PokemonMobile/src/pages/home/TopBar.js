import React,{useState , useEffect} from 'react';
import { View , FlatList , TouchableOpacity , Text , StyleSheet ,Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Api from '../../services/Pokemon/Api';

import {COLORS , WidthScreen , stylesFonts} from '../../Styles';
import _ from  'lodash'
import CardRectangle from '../../components/cardRectangle/Index'
import Options from '../../components/headerOptions/Index'
import Input from '../../components/inputText/Index';

const Stack = createStackNavigator();

const imgLoading = require('../../assets/GifLoading.gif')
const ListeTodos = () =>{

    const [seach , setSeach] = useState('');
    //#region Configs List Api PokéApi

    const [data , setData] = useState([])
    const [fullData , setFullData] = useState([])

    const [loading , setLoading] = useState(true)

    useEffect(() =>{

        async function fetchData (){

            let response = await Api.ListeDefault();

            await LoadingPokemon(response.results)
            
            setLoading(false)
    
        }

        fetchData();


    }, [])

    LoadingPokemon = async (data) =>{
      
        let _pokemonData = await Promise.all(
       
            data.map( async pokemon => {
    
            let pokemonRecord = await Api.GetPokemon(pokemon.url)
    
            return pokemonRecord
    
          })
          
          );
    
          setData(_pokemonData)
          setFullData(_pokemonData)
    
    }

    const RederItem = (pokemon , index) =>
    {


        return(

            <View key={index} style={{margin: 5}}>

                <CardRectangle pokemon={pokemon.item} />

            </View>

        )

    }

    //#endregion

    const SystemSearch = (text) =>{

        setLoading(true)

        const formatteQuery = text.toLowerCase()

        const data = _.filter(fullData , data =>{
    
          if(data.name.includes(formatteQuery)){
            return true
          }
    
          return false

        })
    
       setData(data)
       setSeach(text)
       setLoading(false)

    }

    return(

        <View style={{flex:1 , backgroundColor: COLORS.Background }}>

            <View style={{marginHorizontal:30}}>

            <Input

                bg={COLORS.ColorBlue}
                place='Pesquisar...'
                value={seach}
                onChange={(text) => SystemSearch(text)}

                />

            </View>

            <Options/>

            <View style={{alignItems:'center'}}>

                { loading ? 
                    (
                        <Image source={ imgLoading } style={{width:300 , height:300, alignSelf:'center'}}/>
                    ):

                    (

                        <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={ RederItem }
                        keyExtractor={(item , index) => String(index)}
                        numColumns={2}
                        />

                    )
               }   

            </View>     

        </View>

    )

}

const home = () => {

  return (

    <NavigationContainer independent={true}>

        <Stack.Navigator headerMode={false} tabBarOptions={{style:{backgroundColor: COLORS.Background}}}>

            <Stack.Screen name='Todos' component={ListeTodos}/>

        </Stack.Navigator>

    </NavigationContainer>
  
);

}

const stylesTopBar = StyleSheet.create({
   
    listTab:{

       marginTop:10,
       flexDirection:'row',
       alignSelf:'center',
       marginBottom:20,
       alignItems:'center'
      
    },

    btnTab:{

        width: WidthScreen / 5.5,
        flexDirection:'row',
        borderRadius:5,
        padding: 7,
        justifyContent:'center'

    },

    btnActive:{
        backgroundColor: COLORS.ColorBlue
    },

    btnMore:{

        backgroundColor: COLORS.ColorBlue,
        width:40,
        height:30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5

    }

});

export default home;