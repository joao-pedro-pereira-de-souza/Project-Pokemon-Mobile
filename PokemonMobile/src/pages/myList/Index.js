import React, { useState } from 'react';
import { View , SafeAreaView , TouchableOpacity , Text , FlatList} from 'react-native';
import Loading from 'expo-app-loading';
import { Entypo , MaterialIcons} from '@expo/vector-icons';
import styles from './Styles';
import Api from '../../services/Pokemon/Api';
import {COLORS , stylesFonts} from '../../Styles';
import {useNavigation} from '@react-navigation/native'
import Options from '../../components/headerOptions/Index';
import CardPokemon from '../../components/cardRectangle/Index';


const MyList = () => {

  const [data , setData] = useState([]);
  const Navigation = useNavigation();

  //#region  Api 

  async function GetData  () {

    setData(await Api.ListeDefault())

   }


  if (!GetData()) {

    return <Loading />
    
  }

    const RederItens = (item , index) =>{

      const {name , url} = item.item

      const urlNumber = url.replace('https://pokeapi.co/api/v2/pokemon/' , '').replace('/' , '')
      // adicionando o id do pokemon na uri funcional
      const newUrl = 'https://pokeres.bastionbot.org/images/pokemon/'+ urlNumber + '.png'
      

      return(

        <View style={{margin: 5}}>

          <CardPokemon name={name} img={newUrl}/>

        </View>


      )
  }

  //#endregion

  return (

    <View style={styles.container}>

          
        <SafeAreaView style={styles.contentTop}>

          <TouchableOpacity onPress={() => Navigation.openDrawer()}>
            <Entypo name="menu" size={30} color={COLORS.Coloryellow}/>
          </TouchableOpacity>

        </SafeAreaView>

        <View style={{flexDirection:'row' , alignItems:'center' , marginLeft:10 , marginTop:10}}>

          <Text style={[stylesFonts.title , { color:COLORS.Coloryellow , marginRight:10 }]}>Ordem</Text>

          <MaterialIcons name="sort" size={30} color={COLORS.Coloryellow} />

        </View>

        <Options/>

        <FlatList

          showsVerticalScrollIndicator={false}
          style={{alignSelf:'center'}}
          data={data}
          renderItem={RederItens}
          keyExtractor={(item , index) => String(index)}
          numColumns={2}
        />

    </View>
  
  
    );

}

export default MyList;