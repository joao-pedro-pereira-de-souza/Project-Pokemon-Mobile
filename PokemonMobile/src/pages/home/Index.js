import React, {useState , useEffect} from 'react';
import { View  , SafeAreaView , Text , Image , TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './Styles';

import Input from '../../components/inputText/Index';
import {stylesFonts , COLORS, WidthScreen} from '../../Styles';
import { Entypo , MaterialIcons} from '@expo/vector-icons';
import RoutesTopBar from './TopBar';

import RoutesValue from '../../services/navigation'
export default function home(props) {

 

  //RoutesValue.routes.navigate('MyList' , {title:'isso'})

 return (

   <View style={styles.container}>

     <SafeAreaView style={styles.contentTop}>

       <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
         <Entypo name="menu" size={30} color={COLORS.Coloryellow}/>
       </TouchableOpacity>

     </SafeAreaView>

     <View style={{width:'90%' , alignSelf:'center'}}>

       <View style={styles.contentTitle}>

            <Text style={[stylesFonts.title , {color:COLORS.Coloryellow , marginRight:10 }]} >Databook</Text>

            <Image source={require('../../assets/pokebolaMini.png')} />

        </View>
 
     </View>

    <RoutesTopBar />
    
   </View>

  );
}