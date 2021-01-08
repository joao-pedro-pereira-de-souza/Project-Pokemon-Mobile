import { GetUsers , PostSignUp , GetMyList }from './Api'
import ValuesStatic from '../valuesStatic'

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

    },

    RefreshMyList: async () =>{

        GetMyList().then(content =>{
    
            content.listaPokemon.map(user =>{
    
                if(user.id == ValuesStatic.DadosUser.login.id){
    
                    let array = user.pokemons.split(',')
    
                    ValuesStatic.DadosUser.listPokemons.pokemons = array
    
                }
        
            })
        
    
        })

    }
      

}
