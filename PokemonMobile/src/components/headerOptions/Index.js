import React,{useState} from 'react';
import { View , TouchableOpacity , Text} from 'react-native';
import styles from './Styles'
import {COLORS , stylesFonts} from '../../Styles'

const headerOptions = () => {

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
    
        const setStausFilter = status =>{
    
            setStatus(status)
            console.log(status)
    
        }
    
        //#endregion

  return (
  
    <View style={styles.container}>

        { ListTab.map(e => {

        if (e.status == '+') {

            return(

                <TouchableOpacity style={styles.btnMore}  onPress={() => setStausFilter(e.status)}>

                    <Text style={[

                        stylesFonts.labelDescBold ,
                        {color:'#fff' , fontSize:12} 

                    ]}>+</Text>

                </TouchableOpacity>
                
            )
            
        }

        else{

            return(

                <TouchableOpacity style={[ 

                    styles.btnTab , 
                    status === e.status && styles.btnActive 

                    ]} onPress={() => setStausFilter(e.status)}>
                
                <Text style={[ 

                    stylesFonts.labelDescBold ,
                    {color:'#fff' , fontSize:12} , 
                    status == e.status && {color: '#fff'}]}
                    
                    >{e.status}</Text>

                </TouchableOpacity>


            )
        }


        })

        }

    </View>
  
    );
}

export default headerOptions;