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