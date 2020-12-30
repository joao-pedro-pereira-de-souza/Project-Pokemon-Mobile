import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerScreensHome from './DrawerHome/Index';
import SignIn from '../pages/signIn/Index';
import SignUp from '../pages/signUp/Index';

const Stack = createStackNavigator();

const routes = () =>{
 
    return(

        <NavigationContainer>

            <Stack.Navigator headerMode={false} initialRouteName='Home' 
            >

                <Stack.Screen name='Home' component={DrawerScreensHome} />
                <Stack.Screen name='SignIn' component={SignIn}/>
                <Stack.Screen name='SignUp' component={SignUp} />

            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default routes