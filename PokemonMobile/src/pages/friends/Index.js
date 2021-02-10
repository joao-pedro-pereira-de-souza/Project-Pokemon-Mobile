import React,{useState , useEffect} from 'react';
import { View  , Text , TouchableOpacity , SafeAreaView , FlatList , Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler'
import styles from './Styles';
import Input from '../../components/inputText/Index';
import {COLORS , stylesFonts} from '../../Styles';
import { Feather } from '@expo/vector-icons';
import CardUser from  '../../components/cardFriend/Index';
import RequestionUser from '../../services/User/requisitions';
import InfoModel from '../../components/InfosUserModel/index'

const imgLoading = require('../../assets/GifLoading.gif')

import ValuesStatic from '../../services/User/valuesStatic';
import InfosUser from '../../components/InfosUserModel/index';

const friends = (props) => {

    const [search , setSearch] = useState('')
    const [data , setData] = useState([])

    const [followers , setFollowers] = useState([])
    const [followersMy , setFollowersMy] = useState([])

    const [loading , setLoading] = useState(true)

    const [ notification , setNotification ] = useState(false);
    const [ idUser, setIdUser ] = useState('');

    useEffect(() =>{

        async function GetData (){

             await RequestionUser.RefreshMyList(ValuesStatic.DadosUser.user._id).then((data) =>{

                setFollowers(data.followers)
                setFollowersMy(data.followersMy)

             })

             setData(followers)

             setLoading(false)
        }

       GetData()

    } , [])

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

            if(status == 'Seguidor'){

                setData(followers)

            }else{
                setData(followersMy)
            }
    
            setStatus(status)

        }

        //#endregion

if(loading){

     return (
          
        <View style={{flex:1 , backgroundColor: COLORS.Background , alignItems:'center' , justifyContent:'center'}}>
          
            <Image source={ imgLoading } style={{width:300 , height:300}}/>
          
        </View>
            
    )
}
else{

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
                            
                            >{ e.status == 'Seguidor' ? e.status + ' ' + followers.length : e.status + ' ' + followersMy.length }</Text>

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

               <FlatList 
               refreshing={true}
               data={data}
               keyExtractor={(item , index) => String(index)}
               renderItem={props => <CardUser {...props}  getNotification={setNotification} getIdUser={setIdUser}/>}
               />
                
            </ScrollView>

            <InfoModel

            visible={notification}
            getNotification={setNotification}
            idUser={idUser}


            />

        </View>

  );

}

  
}

export default friends;