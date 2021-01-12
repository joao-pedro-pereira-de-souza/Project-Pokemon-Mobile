import React,{useState  , useEffect} from 'react';
import { ScrollView } from "react-native-gesture-handler";
import { View , Text , TouchableOpacity , Image} from 'react-native';

import styles from './Styles';
import Input from '../../components/inputText/Index'
import {COLORS , stylesFonts , imgPerfil , WidthScreen} from '../../Styles'
import CardPostMensage from '../../components/cardPostMensage/Index'
import { Ionicons , Entypo,FontAwesome} from '@expo/vector-icons';

const chat = () => {
    const [mensage , setMensage] = useState('')

    const marginMyPost = WidthScreen * 0.13
  return (
  
        <View style={styles.container}>

            <View style={styles.contentInfo}>

                <View style={{flexDirection:'row' , marginHorizontal:10 , marginTop:15 , justifyContent:'space-between'}}>

                        <TouchableOpacity>

                            <Ionicons name="ios-arrow-back" size={24} color={COLORS.Coloryellow}/>

                        </TouchableOpacity>

                        <TouchableOpacity>

                        <Entypo name="menu" size={24} color={COLORS.Coloryellow} />

                        </TouchableOpacity>

                </View>

                <View>

                    <View style={{flexDirection:'row' , marginTop:10 ,marginLeft:15}}>

                        <Image source={imgPerfil} style={styles.img}/>

                        <View>

                            <Text style={[ stylesFonts.labelDescBold , {marginLeft:10 , marginTop:10 , color:COLORS.Coloryellow}]}>Pokemons Dark</Text>

                            <Text style={[ stylesFonts.labelDescBold , {marginLeft:10 , opacity:0.8, color:COLORS.Coloryellow , fontSize: WidthScreen * 0.04}]}>100 membros</Text>

                        </View>
                       
                    </View>
                    
                </View>

            </View>

            <View style={styles.contentChat}>

                <View style={styles.contentChatMensage}>

                    <ScrollView >

                        <View style={{flex:1 , marginVertical:20}}>

                            <View style={{marginVertical:10  , marginLeft:10}}>

                            <CardPostMensage IsPost={false} text='Aliqua officia amet sint sint et occaecat occaecat mollit.'/>

                            </View >

                            <View style={{marginVertical:10 , marginLeft:marginMyPost }}>

                            <CardPostMensage IsPost={true} text='In commodo mollit reprehenderit incididunt voluptate esse aute consequat pariatur mollit exercitation. Ex deserunt qui tempor sit quis culpa labore velit ad adipisicing labore labore ea veniam.'/>

                            </View>

                            
                            <View style={{marginVertical:10 , marginLeft:marginMyPost }}>

                            <CardPostMensage IsPost={true} text='Et consequat deserunt eiusmod ad do enim irure est labore.'/>

                            </View>

                            <View style={{marginVertical:10 , marginLeft:10 , }}>

                            <CardPostMensage IsPost={false} text='Quis dolor ad magna ut quis et ad ullamco ullamco incididunt tempor esse anim. Mollit sint exercitation fugiat mollit veniam deserunt duis duis adipisicing veniam consequat aliqua. '/>

                            </View>

                        </View>
                        
                    </ScrollView>

                </View>

                <View style={styles.contentChatForm}>

                    <View style={{marginLeft:10 , width:270}}>

                        <Input 
                        
                        bg={COLORS.Coloryellow}
                        place='Escreva uma mensagem'
                        value={mensage}
                        onChange={(text) => setMensage(text)}
                    
                        />

                    </View>

                 

                    <TouchableOpacity style={styles.buttonMensage}>

                      <FontAwesome name="microphone" size={25} color="#fff" />

                    </TouchableOpacity>

                </View>

            </View>

        </View>

    );
}

export default chat;