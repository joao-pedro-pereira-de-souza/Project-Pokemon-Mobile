import React,{useState} from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent/Index'
import ScreensDrawer from './ScreensDrawer'
import Animated from 'react-native-reanimated';
import { COLORS } from '../../Styles';

const Drawer = createDrawerNavigator();

const drawer = () => {

    //#region 

    const [progres , setProgres] = React.useState(new Animated.Value(0))
   
    const scale = Animated.interpolate(progres,{
  
        inputRange:[0,1],
        outputRange:[1,0.8]
  
    }) 
  
    const borderRadius =  Animated.interpolate(progres,{
  
        inputRange:[0,1],
        outputRange:[0 , 10]
  
    }) 
  
    const screensStyles =  { borderRadius, transform: [ {scale} ] };

    //#endregion

    return (

        <Drawer.Navigator 
        drawerType='slide'
        overlayColor='Transparent'
        drawerStyle={{width:"50%"}}
        contentContainerStyle={{flex:1}}

        drawerContentOptions={{
            activeBackgroundColor:'transparent',
            activeTintColor:'green',
            inactiveTintColor:'green'
        }}

        sceneContainerStyle={{backgroundColor: COLORS.Background}}
        
        drawerContent={ props =>

            { 
                setProgres(props.progress);
                return <DrawerContent {...props}/>

            }
        
        }>

            <Drawer.Screen name='home' >
                { props =>  <ScreensDrawer {...props} style={screensStyles} /> }
            </Drawer.Screen>

        </Drawer.Navigator>

    )
}

export default drawer;