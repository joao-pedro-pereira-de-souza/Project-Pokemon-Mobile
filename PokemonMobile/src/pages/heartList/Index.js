import React,{useState} from 'react';
import { View , TouchableOpacity , Text , FlatList} from 'react-native';
import styles from './Styles'
import {COLORS , stylesFonts} from '../../Styles';
import Api from '../../services/Pokemon/Api';
import Loading from 'expo-app-loading';
import CardRectangle from '../../components/cardRectangle02/Index'


const heartList = () => {

 const [data , setData] = useState([]);
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

        <View style={{ alignSelf:'center'}}>

          <CardRectangle name={name} img={newUrl}/>

        </View>


      )
  }

  //#endregion

  return (

    <View style={styles.container}>

        <Text style={[stylesFonts.title , {color:COLORS.Coloryellow , alignSelf:'center'}]}>Lista de Curtidas</Text>

        <FlatList
        data={data}
        renderItem={RederItens}
        keyExtractor={(item , index) => String(index)}
        
        />

    </View>
  
  
 );
}

export default heartList;