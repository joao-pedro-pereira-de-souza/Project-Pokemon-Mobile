let UrlBase = 'https://pokeapi.co/api/v2/pokemon';

export default {

    ListeDefault: async () =>
    {

        return new Promise((res , req) =>{
            
            fetch(UrlBase + '?limit=0&offset=0')
            .then(response => response.json())
            .then(response => {

                res(response)      

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

    },

    GetPokemon: async (url) =>{

      return new Promise((resolve, reject) => {

        fetch(url)
        .then(res => res.json())
        .then(data => {

            resolve(data);

        }).catch(err =>{
            reject(err)
        })

      })
      

    }

}

// Font: https://www.youtube.com/watch?v=HaEB0vdxpdg