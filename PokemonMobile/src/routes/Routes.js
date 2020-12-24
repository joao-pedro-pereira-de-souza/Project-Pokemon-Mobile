import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerScreensHome from './DrawerHome/Index';
const Stack = createStackNavigator();

const routes = () =>{
 
    return(

        <NavigationContainer>

            <Stack.Navigator>

                <Stack.Screen name='Home' component={DrawerScreensHome} />

            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default routes