import React, { useState , useEffect} from 'react';
import { View  , Text , Image , TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './Styles';
import {stylesFonts , COLORS , WidthScreen , LOGO, HeightScreen} from '../../Styles';

import Input from '../../components/inputText/Index';
import Button from '../../components/button/Index';
import ButtonClcle from '../../components/buttonCicleIcon/Index';
import Notification from '../../components/NotificationsModel/Index'

import { EvilIcons  , FontAwesome , MaterialCommunityIcons } from '@expo/vector-icons';

import Requisitions from '../../services/User/requisitions';

export default function signIn() {

  //#region Values
  const [email , setEmail] = useState('');
  const [senha , setSenha] = useState('');

  const [notification , setNotification ] = useState(false);
  const [status , setStatus] = useState(false);
  const [textNotification , setTextNotification ] = useState('');

  const Navigation = useNavigation();

  //#endregion

  useEffect(()=>{

    setNotification(true)
    setStatus(true)
    setTextNotification('Por conta do limite de requisições na Api de usuários, pode parar de funcionar a Api')

  }, [])
 async function RequestionSignIn(){

      if(await Requisitions.SignIn(email , senha)){

        setNotification(true)
        setStatus(true)
        setTextNotification('Login efetuado com sucesso')

        Navigation.navigate('Home')
        
      }
      else{

        setNotification(true)
        setStatus(false)
        setTextNotification('Erro no login')

      }
  
  }

 return (

  
   <View style={styles.container}>

     <View style={styles.contentSignUp}>

       <Text style={[stylesFonts.label ,{ width:'70%' , color: COLORS.Coloryellow , textAlign:'center' }]}>
         Mais de 300mil cadastros na plataforma
       </Text>

       <TouchableOpacity style={styles.buttonSignUp} onPress={() => Navigation.navigate('SignUp')}>

         <Text style={[stylesFonts.labelDescBold , {color:COLORS.Coloryellow}]}>Cadastrar</Text>

       </TouchableOpacity>

     </View>

     <Text style={[stylesFonts.titleItalic ,{ color: COLORS.Coloryellow , marginTop:20 , marginLeft:WidthScreen * 0.10}]}>Login</Text>

      <View style={styles.contentLogin}>

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
            boolPassword={true}

            />

        </View>

        <Button text='Logar' onPress={() => RequestionSignIn}/>

        <TouchableOpacity onPress={()=>   Navigation.navigate('Home')} style={{alignSelf:'center'}}>
          <Text style={[stylesFonts.labelDesc , {opacity:0.8}]}>Entrar sem login</Text>
        </TouchableOpacity>
     
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

     <Notification

        img={require('../../assets/IconOk.png')}
        text={textNotification}
        visible={notification}
        getNotification={setNotification}
        Status={status}
        
        />

   </View>
  );
}