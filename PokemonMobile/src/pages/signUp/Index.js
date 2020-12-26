import React,{useState} from 'react';
import {useNavigation} from '@react-navigation/native'
import { View , Text , Image ,SafeAreaView , TouchableOpacity} from 'react-native';
import styles from './Styles';
import {COLORS , stylesFonts , LOGO} from '../../Styles';
import * as Animatable from 'react-native-animatable';

import { EvilIcons  , FontAwesome , MaterialCommunityIcons , Ionicons} from '@expo/vector-icons';

import Input from '../../components/inputText/Index';
import Button from '../../components/button/Index';
import ButtonClcle from '../../components/buttonCicleIcon/Index';

export default function signUp() {


  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [senha , setSenha] = useState('');
  const [ConfSenha , setConfSenha] = useState('');

  const Navigation = useNavigation();

 return (
   <View style={styles.container}>
     
     <SafeAreaView style={styles.header}>

       <TouchableOpacity onPress={() => Navigation.navigate('SignIn')}>

       <Ionicons name="ios-arrow-back" size={24} color={COLORS.Coloryellow} />

       </TouchableOpacity> 

     </SafeAreaView>

     <View style={styles.contentInfo}>

       <Text style={[ stylesFonts.titleItalic , { color: COLORS.Coloryellow}]}>Cadastro</Text>

       <View style={{width:'90%' , marginTop:10 , marginLeft:10}}>

         <Text style={[ stylesFonts.labelDesc , {textAlign:'left' , color: COLORS.Coloryellow , opacity:0.8}]}>
           com o cadastro efetuado você terá vários acessos , montar lista de pokemon preferidos e ver pontos.
         </Text>

       </View>

     </View>

        <View style={{width:'90%' , alignSelf:'center' , marginTop:20}}>

        <View style={{marginBottom:10}}>

          <Input
            bg={COLORS.ColorBlue}
            place='Name'
            value={name}
            onChange={(text) => setName(text)}
            
            />

        </View>

        <View style={{marginBottom:10}}>

          <Input
            bg={COLORS.ColorBlue}
            place='Email'
            value={email}
            onChange={(text) => setEmail(text)}
            
            />

        </View>

        <View style={{marginBottom:10}}>

          <Input
            bg={COLORS.ColorBlue}
            place='Senha'
            value={senha}
            onChange={(text) => setSenha(text)}
            
            />

        </View>

        <View style={{marginBottom:10}}>

            <Input
              bg={COLORS.ColorBlue}
              place='Recuperar Senha'
              value={ConfSenha}
              onChange={(text) => setConfSenha(text)}
              
              />

        </View>

        <Button text='Cadastrar'/>
      
      </View>

      <View style={styles.footer}>

            <Image  source={LOGO} style={styles.imgFooter} resizeMode='contain'/>

            <View style={styles.contentFooter}>

              <View style={styles.contentFooterInfo}>

                <Text style={[ stylesFonts.label  ,{ color:'#fff'}]}>Siga as Redes </Text>

                  <View style={styles.contentFooterListButton}>

                      <View style={{marginRight:5}}>

                        <ButtonClcle Icon={EvilIcons} nameIcon='sc-facebook'/>

                      </View>

                      <View style={{marginRight:5}}>

                        <ButtonClcle Icon={FontAwesome} nameIcon='instagram'/>

                      </View>

                      <View style={{marginRight:5}}>

                          <ButtonClcle Icon={MaterialCommunityIcons} nameIcon='web'/>

                      </View>

                  </View>           

              </View>

            </View>
            
            </View>


   </View>
  );
}