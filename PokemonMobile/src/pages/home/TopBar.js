import React,{useState} from 'react';
import { View , FlatList , TouchableOpacity , Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Api from '../../services/Pokemon/Api';
import Loading from 'expo-app-loading';
import {COLORS , WidthScreen , stylesFonts} from '../../Styles'

const TopBar = createMaterialTopTabNavigator();

const ListeTodos = () =>{

    const [data , setData] = useState([])

    async function GetData (){

        setData(await Api.ListeDefault())

    }

    if(!GetData()){

        return <Loading/>

    }

    const RederItem = (item , index) =>
    {

        const { name , uri } = item.item

        return(

            <View style={{marginRight:6}}>

                <Text>{name}</Text>

            </View>

        )

    }

    return(

        <View style={{flex:1 , backgroundColor: COLORS.Background }}>

            <View style={{marginTop:10 , alignItems:'center'}}>

                <FlatList
                
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

        <TopBar.Navigator tabBarOptions={{style:{backgroundColor: COLORS.Background}}} 

        tabBarOptions={{labelStyle: [stylesFonts.labelDescBold , {color:'#fff' , fontSize:10}],

        style:{width:'90%', backgroundColor:'transparent' , alignSelf:'center' , elevation:0 , padding:10}, 

        tabStyle:{width:70 , height:40 , borderRadius:10 , backgroundColor:'red'},
       indicatorStyle:{width:0}
        
        }}
       
        
        >

            <TopBar.Screen name='Todos' component={ListeTodos} options={{tab}} />

        </TopBar.Navigator>

    </NavigationContainer>
  
);

}

export default home;