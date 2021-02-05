import React from 'react';
import { View  , SafeAreaView , Text , Image , TouchableOpacity} from 'react-native';

import styles from './Styles';

import {stylesFonts , COLORS} from '../../Styles';
import { Entypo } from '@expo/vector-icons';
import ValuesStatic from '../../services/User/valuesStatic'
import RoutesTopBar from './TopBar';

export default function home(props) {

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