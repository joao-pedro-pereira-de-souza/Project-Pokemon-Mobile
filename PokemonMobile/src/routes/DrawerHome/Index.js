import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../../pages/home/Index';
import ScreensHome from './DrawerContent/Index';
import Home from '../../pages/home/Index'
import { Header } from 'react-native/Libraries/NewAppScreen';

const Drawer = createDrawerNavigator();
const drawer = () => {

    return (

        <Drawer.Navigator drawerContent={ props => <ScreensHome {...props}/>} >

            <Drawer.Screen name='home' component={Home} options={{headerShown:false}}/>

        </Drawer.Navigator>

    )
}

export default drawer;