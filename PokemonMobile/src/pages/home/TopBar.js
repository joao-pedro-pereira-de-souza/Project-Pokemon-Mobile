import React,{useState , useEffect} from 'react';
import { View , FlatList , TouchableOpacity , Text , StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Api from '../../services/Pokemon/Api';

import {COLORS , WidthScreen , stylesFonts} from '../../Styles';

import CardRectangle from '../../components/cardRectangle/Index'
import Options from '../../components/headerOptions/Index'

const Stack = createStackNavigator();

const ListeTodos = () =>{

    //#region  TopBarSystem
    let ListTab = [
        {
            status:'Todos'
        },
    
        {
            status:'Água'
        },
    
        {
            status:'Fogo'
        },
        {
            status:'Terra'
        },

        {
            status:'+'
        },
    
    ]

    const [status , setStatus]= useState('Todos')

    const setStausFilter = status =>{

        setStatus(status)
        console.log(status)

    }

    //#endregion

    //#region Configs List Api PokéApi

    const [data , setData] = useState([])

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
    
    }

    const RederItem = (pokemon) =>
    {

        return(

            <View style={{margin: 5}}>

                <CardRectangle pokemon={pokemon.item}/>

            </View>

        )

    }

    //#endregion

    return(

        <View style={{flex:1 , backgroundColor: COLORS.Background }}>

            <Options/>

            <View style={{alignItems:'center'}}>

                { loading ? 
                    (
                        <Text style={[stylesFonts.labelBold , {color:'#fff'}]}>Loading...</Text>
                    ):

                    (

                        <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={RederItem}
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