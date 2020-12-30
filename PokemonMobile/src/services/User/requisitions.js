import { GetUsers , PostSignUp}from './Api'


export default {

    SignIn: async (name , password) =>{

        const Liste = await GetUsers();

        return new Promise((rest , req) =>{

            try{

                let boolUser = false

                Liste.forEach(element => {
    
                   if(element.name == name){
    
                        if(element.senha = password){
    
                            boolUser = true;
    
                        }      
                    
                   }
    
                  
                });
    
               rest(boolUser)  
    

            }

            catch{
               console.log('Erro no sistema')
            }
 

        })


    },

    SignUp : async (Array)=>
    {

        return new Promise((res , req) =>{

            PostSignUp(Array).then(response =>{

                res(response)

            }).catch(err =>{
                req(err)
            })

        })

    }

}