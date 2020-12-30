import React from 'react'

import {createStackNavigator} from '@react-navigation/stack';
import Animated from 'react-native-reanimated';
import HomeScreen from '../../pages/home/Index';
import { COLORS } from '../../Styles';

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
                <Stack.Screen name='Home2' component={HomeScreen}/>
            </Stack.Navigator>

        </Animated.View>
    )
  
}

export default routes;
