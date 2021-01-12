import React from 'react'

import {createStackNavigator} from '@react-navigation/stack';
import Animated from 'react-native-reanimated';
import HomeScreen from '../../pages/home/Index';
import MyList from '../../pages/myList/Index';
import HeartScreen from '../../pages/heartList/Index';
import ScreenDetails from '../../pages/details/Index';
import ScreenFriends from '../../pages/friends/Index';
import ScreenchatHome from '../../pages/chatHome/Index';
import { COLORS } from '../../Styles';
import ScreenChat from '../../pages/chat/Index'

const Stack = createStackNavigator()

const routes = ({style}) => {


    return(

        <Animated.View
        
        style={[
            {
                flex:1 , 
                overflow:"hidden",
        
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 9,
                },
                shadowOpacity: 0.50,
                shadowRadius: 12.35,
                borderColor: COLORS.Coloryellow,
                elevation: 19,     
         
             } , style]}

        >

            <Stack.Navigator headerMode={false} >
                
                <Stack.Screen name='HomeScreen' component={HomeScreen}/>
                <Stack.Screen name='MyList' component={MyList} />
                <Stack.Screen name='Curtidas' component={HeartScreen} />
                <Stack.Screen name='Details' component={ScreenDetails} />
                <Stack.Screen name='Friends' component={ScreenFriends} />
                <Stack.Screen name='ChatHome' component={ScreenchatHome} />
                <Stack.Screen name='Chat' component={ScreenChat} />
                
            </Stack.Navigator>

        </Animated.View>
    )
  
}

export default routes;
