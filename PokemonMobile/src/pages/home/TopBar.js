import React,{useState} from 'react';
import { View , FlatList , TouchableOpacity , Text , StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Api from '../../services/Pokemon/Api';
import Loading from 'expo-app-loading';
import {COLORS , WidthScreen , stylesFonts} from '../../Styles'

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

        const { name , uri } = item.item

        return(

            <View style={{marginRight:6}}>

                <Text>{name}</Text>

            </View>

        )

    }

    //#endregion

    return(

        <View style={{flex:1 , backgroundColor: COLORS.Background }}>

            <View style={stylesTopBar.listTab}>

                    { ListTab.map(e => {

                        if (e.status == '+') {

                            return(

                                <TouchableOpacity style={stylesTopBar.btnMore}  onPress={() => setStausFilter(e.status)}>

                                    <Text style={[

                                        stylesFonts.labelDescBold ,
                                        {color:'#fff' , fontSize:12} 

                                    ]}>+</Text>

                                </TouchableOpacity>
                                
                            )
                            
                        }
                        
                        else{

                            return(

                                <TouchableOpacity style={[ 

                                    stylesTopBar.btnTab , 
                                    status === e.status && stylesTopBar.btnActive 
        
                                    ]} onPress={() => setStausFilter(e.status)}>
                                
                                <Text style={[ 
        
                                     stylesFonts.labelDescBold ,
                                     {color:'#fff' , fontSize:12} , 
                                     status == e.status && {color: '#fff'}]}
                                     
                                     >{e.status}</Text>
        
                                </TouchableOpacity>
        

                            )
                        }


                    })

                    }

            </View>

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