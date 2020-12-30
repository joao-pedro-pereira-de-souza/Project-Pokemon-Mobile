import React from 'react'
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {View , Image , Text} from 'react-native'
import {COLORS} from '../../../Styles'

const drawerContent = (props) =>{

    return(

        <DrawerContentScrollView {...props} style={{flex:1 , backgroundColor: COLORS.Background}}>

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