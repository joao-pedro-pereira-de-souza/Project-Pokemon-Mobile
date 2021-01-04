let UrlListDefault = 'https://pokeapi.co/api/v2/pokemon?limit=200&offset=200';

export default {

    ListeDefault: async () =>
    {

        return new Promise((res , req) =>{
            
            fetch(UrlListDefault)
            .then(response => response.json())
            .then(response => {

                res(response.results)

            })
            .catch(err => {

                req(err)
                
            })

            
        })

    },
    ListLimit : async (quant) =>{

        return new Promise((resolve, reject) => {

            fetch('https://pokeapi.co/api/v2/pokemon?limit=' + quant +'&offset=200')
            .then(response => response.json())
            .then(response => {
                resolve(response.results)
            }).catch(err =>{
                reject(err)
            })
          
        })
        

    }

}
