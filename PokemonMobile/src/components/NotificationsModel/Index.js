import React from 'react';
import {Image , Text , TouchableOpacity} from 'react-native';
import { View } from 'react-native-animatable';
import Modal from 'react-native-modal';
import styles from './Styles';
import {stylesFonts , COLORS , HeightScreen} from '../../Styles';

import ImgErro from '../../assets/IconErro.png';
import ImgOk from '../../assets/IconOk.png';

const NotificationsModel = (props) => {

    const DesativeNoti = () =>{

        props.getNotification(false)
    }


  return (

     <Modal animationType='slide' visible={props.visible || false} transparent={true} animationIn='zoomIn'>

         <View style={styles.container}>

         <Image source={props.Status ? ImgOk : ImgErro} style={{width:'50%' , height:'50%', alignSelf:'center' , marginTop:30}} resizeMode='contain' />

            <Text style={[ stylesFonts.labelDescBold , styles.labelDescConf]}>
                {props.text}
            </Text>

            <TouchableOpacity style={styles.button} onPress={DesativeNoti}>

                <Text style={[stylesFonts.labelBold , { color:'#fff'} ]}>Ok</Text>

            </TouchableOpacity>

         </View>
        
     </Modal>
  
  
    );
}

export default NotificationsModel;