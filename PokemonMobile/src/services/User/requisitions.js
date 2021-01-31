import { SignIn , SignUp }from './Api'
import ValuesStatic from './valuesStatic'

export default {

    SignIn: async (email , password) =>{

        return new Promise((resolve, reject) => {

            SignIn(email , password ).then(

                data =>{
    
                    if(data.error){
    
                        reject(data.message)
    
                    }
                    ValuesStatic.Token = data.token;
                    ValuesStatic.DadosUser = data;
                    resolve()
    
            }).catch(dataErro => {
    
                reject(dataErro)
    
            })
          
        })
        
        

    },

    SignUp : async (name , email , password )=>
    {

       await SignUp(name ,email , password).then(data =>{

            ValuesStatic.Token = data.token;
            ValuesStatic.DadosUser = data;

       }).catch(DataErro =>{

        return DataErro

       })

    },

    RefreshMyList: async () =>{

     
    }
      

}
