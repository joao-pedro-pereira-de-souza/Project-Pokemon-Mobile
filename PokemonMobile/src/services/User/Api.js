let urlBase = "http://apipokebook.herokuapp.com"

// https://stackoverflow.com/questions/30203044/using-an-authorization-header-with-fetch-in-react-native

export const GetUsers = () =>{

    return new Promise((res , req) => {

        fetch(urlBase + "/user/list/")
        .then( response => response.json())
        .then(response  =>{

            res(response)

        }).catch(err =>{
            req("ocorreu um erro")
        })

    })

}

export const SignUp = (name , email , password) =>{

    return new Promise((res , req) => {

        let body = {

            name,
            email,
            password
    
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

export const GetMyList = (id) =>{
    return new Promise((resolve, reject) => {

        fetch(urlBase + '/myList/user/' + id)
        .then(response => response.json())
        .then(response => {
            resolve(response)
        }).catch(err =>{
            
            reject(err)
        })
      
    })
    
}

export const SignIn = (email , password) =>{

return new Promise((resolve, reject) => {

    fetch(urlBase +'/user/signIn',{

        method:'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({email , password})

    }).then(response => response.json()).then(data =>{

        resolve(data)

    }).catch(error =>{
        reject(error)
    })

})


}