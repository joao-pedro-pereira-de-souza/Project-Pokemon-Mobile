let urlBase = "http://apipokebook.herokuapp.com"
import ValuesStatic from './valuesStatic'

// User_Token: https://stackoverflow.com/questions/30203044/using-an-authorization-header-with-fetch-in-react-native

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

    return new Promise((resolve, reject) => {

        fetch(urlBase + '/user/register', {
    
            method:'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({name , email , password})
    
        })
        .then((response)=> response.json())
        .then(data => {
            resolve(data)
    
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

export const GetMyList = (id) => {

    return new Promise((resolve, reject) => {

        fetch(urlBase + '/myList/user/' + id, {

            method:'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + ValuesStatic.Token,
            },

        }).then(response => response.json()).then(data => {

            resolve(data)

        }).catch((err) =>{

            reject(err)

        })
      
    })  

}

export const InsertItemMyList = (itemUpdate , id) =>{

    return new Promise((resolve, reject) => {

        fetch(urlBase + '/myList/addItem/' + id, {

            method:'PUT',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + ValuesStatic.Token,
            },
            body: JSON.stringify(itemUpdate)

        }).then(response => response.json()).then(data => {

            resolve(data)

        }).catch((err) =>{

            reject(err)

        })
      
    })  

}

export const DeleteItemMyList = (itemDelete ,id) =>{

    return new Promise((resolve, reject) => {
      
        fetch(urlBase + '/myList/delete/' + id , {

            method:'PUT',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + ValuesStatic.Token,
            },

            body: JSON.stringify(itemDelete)
            
        }).then(response => response.json()).then(data =>{
            resolve(data)
        }).catch(err => {
            reject(err)
        })


    })
    

}