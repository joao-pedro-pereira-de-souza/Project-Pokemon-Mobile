import React, {useState , useEffect} from 'react';
import { View  , SafeAreaView , Text , Image , TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './Styles';

import Input from '../../components/inputText/Index';
import {stylesFonts , COLORS, WidthScreen} from '../../Styles';
import { Entypo , MaterialIcons} from '@expo/vector-icons';
import RoutesTopBar from './TopBar';


export default function home() {

  const [seach , setSeach] = useState('');
  const Navigation = useNavigation();

 return (

   <View style={styles.container}>

     <SafeAreaView style={styles.contentTop}>

       <TouchableOpacity onPress={() => Navigation.openDrawer()}>
         <Entypo name="menu" size={30} color={COLORS.Coloryellow}/>
       </TouchableOpacity>

     </SafeAreaView>

     <View style={{width:'90%' , alignSelf:'center'}}>

       <View style={styles.contentTitle}>

            <Text style={[stylesFonts.title , {color:COLORS.Coloryellow , marginRight:10 }]} >Databook</Text>

            <Image source={require('../../assets/pokebolaMini.png')} />

        </View>

        <View style={styles.contentSearch}>

            <Input

              bg={COLORS.ColorBlue}
              place='Pesquisar...'
              value={seach}
              onChange={(text) => setSeach(text)}

              />

        </View>
 
     </View>


    <RoutesTopBar/>
    
   </View>

  );
}