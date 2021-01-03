let url = 'https://api.sheety.co/0a8d8b30bb4734602aaab4d7489ad3a3/login/página1';

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

export const DeleteItem = () =>{

return new Promise((resolve, reject) => {

    
  
})


}