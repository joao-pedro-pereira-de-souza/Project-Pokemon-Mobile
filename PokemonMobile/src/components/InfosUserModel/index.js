import React,{useState , useEffect} from 'react';
import {Image , Text , TouchableOpacity} from 'react-native';
import { View } from 'react-native-animatable';
import Modal from 'react-native-modal';
import styles from './Styles';
import {stylesFonts , COLORS , HeightScreen} from '../../Styles';
import img from '../../assets/perfil.jpg';
import RequestionsUser from '../../services/User/requisitions'

const imgLoading = require('../../assets/GifLoading.gif')

const InfosUser = (props) => {

    const [loading , setLoading] = useState(true)
    const [data , setData] = useState([])


    const DesativeNoti = () =>{

        props.getNotification(false)
    }

    const teste = () =>{
         console.log(props)
    }

 

    const getDataUser = async () =>{

        if(props.visible){

            await RequestionsUser.RefreshMyList(props.idUser).then((data) =>{

                console.log(data)
        
             })

             setLoading(false)
         
              
        }

    }

    getDataUser()

  return (

     <Modal animationType='slide' visible={props.visible || false} transparent={true} animationIn='zoomIn'>

               { loading ? 
                    (

                        <View style={[styles.container , { justifyContent:'center' }]}>
               
                             <Image source={imgLoading} style={{width:'90%'}} resizeMode='contain'/>
            
                        </View>
                 
                    ):

                    (

                        <View style={styles.container}>

                                <Image source={img} style={styles.img} resizeMode='cover' />

                                <Text style={[ stylesFonts.labelDescBold , styles.labelDescConf]}>
                                    {}
                                </Text>

                                <View style={{ position:'absolute', bottom:15, width:'100%' , alignItems:'center'}}>

                                    <TouchableOpacity style={[styles.button , {marginBottom:5}]} onPress={teste}>

                                         <Text style={[stylesFonts.labelBold , { color:'#fff'} ]}>parar de seguir</Text>

                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button} onPress={DesativeNoti}>

                                         <Text style={[stylesFonts.labelBold , { color:'#fff'} ]}>Voltar</Text>

                                    </TouchableOpacity>

                                </View>

                              

                        </View>

                    )
               }   
        
     </Modal>
  
    );
}

export default InfosUser;