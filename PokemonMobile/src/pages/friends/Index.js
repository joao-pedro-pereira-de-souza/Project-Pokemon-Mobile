import React,{useState} from 'react';
import { View  , Text , TouchableOpacity , SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'
import styles from './Styles';
import Input from '../../components/inputText/Index'
import {COLORS , stylesFonts , imgPerfil} from '../../Styles'
import { Feather } from '@expo/vector-icons';
import CardUser from  '../../components/cardFriend/Index'


const friends = (props) => {

    const [search , setSearch] = useState('')

          //#region  TopBarSystem

          let ListTab = [
            {
                status:'Seguidor'
            },
        
            {
                status:'Seguindo'
            },
        
        
        
        ]
    
        const [status , setStatus]= useState('Seguidor')
    
        const setStausFilter = (status) =>{
    
            setStatus(status)

        }
    
        //#endregion

  return (

        <View style={styles.Container}>

            <SafeAreaView style={{marginTop:30 , marginLeft:20}}>
                 <TouchableOpacity onPress={()=> props.navigation.openDrawer()}>

                     <Feather name="menu" size={30} color={COLORS.Coloryellow}/>

                 </TouchableOpacity>
            </SafeAreaView>

            <View style={styles.containerOption}>

            { ListTab.map((e , i) => {

                    return(

                        <TouchableOpacity key={i} style={[ 

                            styles.btnTab , 
                            status === e.status && styles.btnActive 

                            ]} onPress={() => setStausFilter(e.status)}>
                        
                        <Text style={[ 

                            stylesFonts.labelDescBold ,
                            {fontSize:12} , 
                            status == e.status && {color: '#fff'}]}
                            
                            >{e.status + ' 200'}</Text>

                        </TouchableOpacity>

                    )

                })

            }


            </View>
            <View style={{marginVertical:20 , marginHorizontal:20}}>

                <Input
                
                bg={COLORS.ColorBlue}
                place='Pesquisar...'
                value={search}
                onChange={(text) => SystemSearch(text)}

                />

            </View>

            <ScrollView style={{alignSelf:'center'}} showsVerticalScrollIndicator={false}>

                <View style={{marginVertical:5}}>

                     <CardUser name='João' img={imgPerfil} pokemons={5}/>

                </View>
                <View style={{marginVertical:5}}>

                     <CardUser name='Thiagon' img={imgPerfil} pokemons={5}/>

                </View>
                <View style={{marginVertical:5}}>

                     <CardUser name='Ruan' img={imgPerfil} pokemons={5}/>

                </View>
                <View style={{marginVertical:5}}>

                     <CardUser name='Rafael' img={imgPerfil} pokemons={5}/>

                </View>
                
            </ScrollView>
        </View>

  );
}

export default friends;