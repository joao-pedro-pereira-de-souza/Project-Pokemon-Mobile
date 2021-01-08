import React,{useState} from 'react';
import { View , TouchableOpacity , Text , Switch} from 'react-native';
import styles from './Styles'
import {COLORS , stylesFonts} from '../../Styles';
import Modal from 'react-native-modal'
import { MaterialIcons } from '@expo/vector-icons';
import {RadioButton} from 'react-native-paper'

const ModalMore = (props) =>{

    const [value, setValue] = useState(false);

    const isLimitList = () =>{

        setValue(value => !value)

    }

    return(

        <Modal animationType='slide' visible={props.visible || false} transparent={true} animationIn='zoomIn'>

            <View style={{width:300 , height:380, backgroundColor:COLORS.Background , elevation:10 , alignSelf:'center' , borderRadius:10}}>

                <TouchableOpacity style={{position:'absolute' , left:8 , top:8}} onPress={() => props.getVisibleModal(false)}>

                     <MaterialIcons name="keyboard-arrow-left" size={35} color={COLORS.Coloryellow} />

                </TouchableOpacity>

                <Text

                style={[

                    stylesFonts.labelBold ,
                    {color:COLORS.Coloryellow , fontSize:17 , alignSelf:'center' , marginTop:10} 

                ]}>
                     Quantidade de pokémons

                </Text>

                <View style={{flexDirection:'row' , position:'relative' , left:15 , top:20 , alignItems:'center' }}>

                    <Text 
                    
                    style={[

                        stylesFonts.labelBold ,
                        {color:COLORS.Coloryellow , fontSize:12 , alignSelf:'center'} 
    
                    ]}
                    
                    >Sem Limites de pokémons:</Text>

                    <Switch
                    
                    value={value}

                    onValueChange={isLimitList}
                    
                    /> 


                </View>
                
             
            </View>

        </Modal>

    )
}

const headerOptions = () => {

    const [visibleModal , SetVisibleModal] = useState(false)

        //#region  TopBarSystem

        let ListTab = [
            {
                status:'Todos'
            },
        
            {
                status:'Água'
            },
        
            {
                status:'Fogo'
            },
            {
                status:'Terra'
            },
    
            {
                status:'+'
            },
        
        ]
    
        const [status , setStatus]= useState('Todos')
    
        const setStausFilter = (status) =>{
    
            setStatus(status)

           
    
        }
    
        //#endregion

    const MoreFunction = (e) =>{

        setStausFilter(e.status)
        SetVisibleModal(true)

    }
    
  return (
  
    <View style={styles.container}>

        { ListTab.map((e , i) => {

        if (e.status == '+') {

            return(

                <TouchableOpacity key={i} style={styles.btnMore}  onPress={() => MoreFunction(e)}>

                    <Text style={[

                        stylesFonts.labelDescBold ,
                        {fontSize:12} 

                    ]}>+</Text>

                </TouchableOpacity>
                
            )
            
        }

        else{

            return(

                <TouchableOpacity key={i} style={[ 

                    styles.btnTab , 
                    status === e.status && styles.btnActive 

                    ]} onPress={() => setStausFilter(e.status)}>
                
                <Text style={[ 

                    stylesFonts.labelDescBold ,
                    {fontSize:12} , 
                    status == e.status && {color: '#fff'}]}
                    
                    >{e.status}</Text>

                </TouchableOpacity>

            )
        }


        })

        }
        <ModalMore visible={visibleModal} getVisibleModal={SetVisibleModal}/>


    </View>
  
    );
}

export default headerOptions;