import React,{useState} from 'react';
import { View  , Text , TouchableOpacity , SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'
import styles from './Styles';
import Input from '../../components/inputText/Index'
import {COLORS , stylesFonts , imgPerfil} from '../../Styles'
import { Feather } from '@expo/vector-icons';
import CardUser from  '../../components/cardMensage/Index'


const chat = (props) => {
  const [search , setSearch] = useState('')

  return (

    <View style={styles.container}>

          <SafeAreaView style={{marginTop:30 , marginLeft:20}}>
                 <TouchableOpacity onPress={()=> props.navigation.openDrawer()}>

                     <Feather name="menu" size={30} color={COLORS.Coloryellow}/>

                 </TouchableOpacity>
            </SafeAreaView>

            <View style={{marginVertical:20 , marginHorizontal:20}}>

                  <Input

                  bg={COLORS.ColorBlue}
                  place='Pesquisar...'
                  value={search}
                  onChange={(text) => SystemSearch(text)}

                  />

              </View>

              <ScrollView >

                <View style={{alignItems:'center'}}>

                      <View style={{marginVertical:5}}>

                      <CardUser name='João' img={imgPerfil} pokemons={5}/>

                      </View>

                      <View style={{marginVertical:5}}>

                      <CardUser name='João' img={imgPerfil} pokemons={5}/>

                      </View>

                      <View style={{marginVertical:5}}>

                      <CardUser name='João' img={imgPerfil} pokemons={5}/>

                      </View>

                </View>

                


              </ScrollView>

    </View>


  );
}

export default chat;