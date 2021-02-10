import React from 'react';
import { View , Image , TouchableOpacity , Text} from 'react-native';
import styles from './Styles';
import {WidthScreen , stylesFonts} from '../../Styles';
import {ScrollView} from 'react-native-gesture-handler'
import img from '../../assets/perfil.jpg'

const cardRectangle02 = (props) => {


  const Show = () =>{

    props.getIdUser(props.item._id)

    props.getNotification(true)

  }

  return (

    <TouchableOpacity key={props.index} style={styles.container} onPress={() =>Show()}>

         <Image  source={img} style={styles.img} />

          <View style={{marginLeft: WidthScreen * 0.01 , marginTop: WidthScreen * 0.02 }}>

              <Text style={[stylesFonts.title , { fontSize:25 }]}>{props.item.name}</Text>
              <Text style={[stylesFonts.labelDesc ,{opacity: 0.8 ,fontSize:16}]}>{props.item.email}</Text>

              <ScrollView horizontal >

                  <Image  source={props.img} style={styles.imgPoke} />
                  <Image  source={props.img} style={styles.imgPoke} />
                  <Image  source={props.img} style={styles.imgPoke} />
                  <Image  source={props.img} style={styles.imgPoke} />

              </ScrollView>

          </View>

          <View style={{alignItems:'center' , position:'absolute' , top:8 , right:8}}>

          </View>

    </TouchableOpacity>

  );
}

export default cardRectangle02;