import React,{useState} from 'react';
import {useNavigation} from '@react-navigation/native'
import { View , Text , Image ,SafeAreaView , TouchableOpacity} from 'react-native';
import styles from './Styles';
import {COLORS , stylesFonts , LOGO} from '../../Styles';

import { EvilIcons  , FontAwesome , MaterialCommunityIcons , Ionicons} from '@expo/vector-icons';

import Input from '../../components/inputText/Index';
import Button from '../../components/button/Index';
import ButtonClcle from '../../components/buttonCicleIcon/Index';
import Notification from '../../components/NotificationsModel/Index';

import Requestions from '../../services/User/requisitions'
import RequestionsSystem from '../../services/Requestions'

export default function signUp() {

  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [senha , setSenha] = useState('');
  const [ConfSenha , setConfSenha] = useState('');

  const [notification , setNotification ] = useState(false);
  const [status , setStatus] = useState(false);
  const [textNotification , setTextNotification ] = useState('');

  const Navigation = useNavigation();

  async function SignUpPOST (){

    if(!RequestionsSystem.TextNull([name , email , senha , ConfSenha]))
    {

      if(senha == ConfSenha)
      {

          let ArraySignUp = { name:name , email: email , senha: senha}

          await Requestions.SignUp(ArraySignUp).then
          ( 

              () => 
              {

                setNotification(true)
                setStatus(true)
                setTextNotification('Login efetuado com sucesso')
              
              },

              ()=>{

                setNotification(true)
                setStatus(false)
                setTextNotification('Ocorreu um erro no cadastro \n tente novamente')

              }
            
            )
      }
      else
      {

        setNotification(true)
        setStatus(false)
        setTextNotification('A senha tem que ser igual no Confirmar senha \n tente novamente')

      }
      
     
    }
    else
    {

      setNotification(true)
      setStatus(false)
      setTextNotification('Digite todos os campos \n tente novamente')

    }

  }

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
           com o cadastro efetuado você terá vários acessos , montar lista de pokémon preferidos e ver pontos.
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
                boolPassword={true}
                />

            </View>

            <View style={{marginBottom:10}}>

                <Input
                  bg={COLORS.ColorBlue}
                  place='Recuperar Senha'
                  value={ConfSenha}
                  onChange={(text) => setConfSenha(text)}
                  boolPassword={true}
                  />

            </View>

        <Button text='Cadastrar' onPress={() => SignUpPOST}/>
      
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