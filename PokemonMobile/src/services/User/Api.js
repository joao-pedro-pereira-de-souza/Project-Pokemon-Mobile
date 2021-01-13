let url = 'https://api.sheety.co/0a8d8b30bb4734602aaab4d7489ad3a3/login/página1';
let urlMy = 'https://api.sheety.co/0a8d8b30bb4734602aaab4d7489ad3a3/login/listaPokemon'

export const GetUsers = () =>{

    return new Promise((res , req) => {

        fetch(url)
        .then( response => response.json())
        .then(response  =>{

            res(response.página1)

        }).catch(err =>{
            req("ocorreu um erro")
        })

    })

}


export const PostSignUp = (JsonItens) =>{

    return new Promise((res , req) => {

        let body = {

            página1:{
    
              ...JsonItens
    
            }
    
        }

        fetch(url, {
    
            method:'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(body)
    
        })
        .then((response)=> response.json())
        .then(response => {

            res(response.página1)
    
        }).catch(err =>{

            req(err)
    
        })

    })
   


}

export const GetMyList = () =>{
    return new Promise((resolve, reject) => {

        fetch(urlMy)
        .then(response => response.json())
        .then(response => {
            resolve(response)
        }).catch(err =>{
            
            reject(err)
        })
      
    })
    
}

export const DeleteItem = () =>{

return new Promise((resolve, reject) => {

    
  
})


}