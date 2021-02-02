import { SignIn , SignUp , GetMyList}from './Api'
import ValuesStatic from './valuesStatic'

export default {

    SignIn: async (email , password) =>{

        return new Promise((resolve, reject) => {

            SignIn(email , password ).then(

                data =>{
    
                    if(data.error){
                        
                        reject(data.error)
    
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

        return new Promise((resolve, reject) => {

            SignUp(name ,email , password).then(data =>{

                if(data.error){

                    reject(data.error)

                }

                ValuesStatic.Token = data.token;
                ValuesStatic.DadosUser = data;

                resolve()
    
           }).catch(DataErro =>{
    
             reject(DataErro)
    
           })
    
          
        })
        
    },

    RefreshMyList: async (id) =>{

        return new Promise((resolve, reject) => {
            GetMyList(id).then(data =>{

                if(data.error){

                    reject(data.error)

                }

                resolve(data)
    
           }).catch(DataErro =>{
    
             reject(DataErro)
    
           })
    
        })
        

     
    },
  

}
