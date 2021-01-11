import React from 'react'
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {View , Image , Text , StyleSheet} from 'react-native'
import {COLORS , stylesFonts} from '../../../Styles'
import { AntDesign , Feather , MaterialIcons} from '@expo/vector-icons';
import Routes from '../../../services/navigation'

import {useNavigation} from '@react-navigation/native';

const drawerContent = (props) =>{

    const Navigation = useNavigation()

    Routes.routes = Navigation;

    return(

        <DrawerContentScrollView {...props} style={{flex:1 , backgroundColor: COLORS.Background}}>

            <View style={{alignItems:'center' , width:100 , marginVertical:10}}>
                <Image source={require('../../../assets/perfil.jpg')} style={{width:60 , height:60 , borderRadius:30}}/>

                <Text style={[stylesFonts.labelDescBold , {color:COLORS.ColorBlue}]}>Name</Text>
            </View>

            <View>

                <DrawerItem

                style={{elevation:1.5 , width:200 , borderRadius:10 }}
                label='Home'
                onPress={() =>  props.navigation.navigate('HomeScreen')}
                labelStyle={[ stylesFonts.labelBold ,{ color: COLORS.Coloryellow , marginLeft:-10}]}
                icon={() => <AntDesign name="home" size={24} color={COLORS.Coloryellow} />}

                />

            <DrawerItem
                style={{elevation:1.5 , width:200 , borderRadius:10 }}
                label='Curtidas'
                labelStyle={[ stylesFonts.labelBold ,{ color: COLORS.Coloryellow , marginLeft:-10}]}
                icon={() => <AntDesign name="heart" size={24} color={COLORS.Coloryellow} />}

                />

            <DrawerItem
                 style={{elevation:1.5 , width:200 , borderRadius:10 }}
                label='Minha lista'
                onPress={() =>  props.navigation.navigate('MyList')}
                labelStyle={[ stylesFonts.labelBold ,{ color: COLORS.Coloryellow , marginLeft:-10}]}
                icon={() => <Feather name="list" size={24} color={COLORS.Coloryellow}/>}

                
                />

            <DrawerItem
                style={{elevation:1.5 , width:200 , borderRadius:10 }}
                label='Amigos'
                labelStyle={[ stylesFonts.labelBold ,{ color: COLORS.Coloryellow , marginLeft:-10}]}
                icon={() => <Feather name="users" size={24} color={COLORS.Coloryellow}/>}
                
                />
            <DrawerItem
                style={{elevation:1.5 , width:200 , borderRadius:10 }}
                label='Chat'
                labelStyle={[ stylesFonts.labelBold ,{ color: COLORS.Coloryellow , marginLeft:-10}]}
                icon={() => <MaterialIcons name="chat-bubble-outline" size={24} color={COLORS.Coloryellow} />}
                
                />

            <DrawerItem
                style={{elevation:1.5 , width:200 , borderRadius:10 , marginTop:100}}
                label='Sair'
                labelStyle={[ stylesFonts.labelBold ,{ color: COLORS.Coloryellow , marginLeft:-10}]}
                icon={() => <MaterialIcons name="exit-to-app" size={24} color={COLORS.Coloryellow} />}
                
                />

            </View>
            
        </DrawerContentScrollView>

    )
}

const styles = StyleSheet.create({
    
});

export default drawerContent;