import React,{useState} from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Api from '../../services/Pokemon/Api';

import Details from '../../pages/details/Index';
import { View  , Text} from 'react-native';
import {COLORS} from '../../Styles';

import {RadioButton } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler';

const dataSelect = { todos:true , agua: false , fogo: false}

const SystemTobBar = (value) =>{

    switch (value) {

        case 'Todos':

            dataSelect(select => select.todos == false)

            console.log(selected.todos)
            
            break;
    
        default:
            break;

    }

}

const Stack = createStackNavigator();

const routes = () => {

    return(
        <View style={{flex:1, marginVertical:10}}>

            <View style={{flexDirection:'row'}}>

                <TouchableOpacity style={{width:100 , height:20 , backgroundColor:'#000'}} onPress={ () => SystemTobBar('Todos')}>

                </TouchableOpacity>

            </View>

                <NavigationContainer independent={true} style={{flex: 1, backgroundColor:'#000'}}>

                <Stack.Navigator style={{height:600}}>

                   <Stack.Screen name='Todos' component={Details}/>

                </Stack.Navigator>

                </NavigationContainer>

        </View>

    )

}

export default routes