import React from 'react'
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {View , Image , Text} from 'react-native'

const drawerContent = () =>{

    return(

        <DrawerContentScrollView>

            <View>

                <DrawerItem
                
                label='Home'

                
                />

            <DrawerItem
                
                label='Curtidas'
                
                
                />

            <DrawerItem
                
                label='Minha lista'
                
                
                />

            <DrawerItem
                
                label='Amigos'
                
                
                />
            <DrawerItem
                
                label='Chat'
                
                
                />

            </View>
            
        </DrawerContentScrollView>

    )
}

export default drawerContent;