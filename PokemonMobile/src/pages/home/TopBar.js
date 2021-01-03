import React,{useState} from 'react';
import { View , FlatList , TouchableOpacity , Text , StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Api from '../../services/Pokemon/Api';
import Loading from 'expo-app-loading';
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

    async function GetData (){

        setData(await Api.ListeDefault())

    }

    if(!GetData()){

        return <Loading/>

    }

    const RederItem = (item , index) =>
    {

        const { name , url } = item.item

        const urlNumber = url.replace('https://pokeapi.co/api/v2/pokemon/' , '').replace('/' , '')
        // adicionando o id do pokemon na uri funcional
        const newUrl = 'https://pokeres.bastionbot.org/images/pokemon/'+ urlNumber + '.png'
        

        return(

            <View style={{margin: 5}}>

                <CardRectangle name={name} img={newUrl}/>

            </View>

        )

    }

    //#endregion

    return(

        <View style={{flex:1 , backgroundColor: COLORS.Background }}>

             
            <Options/>

            <View style={{alignItems:'center'}}>

                <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={RederItem}
                keyExtractor={(item , index) => String(index)}
                numColumns={2}
                />

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