let UrlListDefault = 'https://pokeapi.co/api/v2/pokemon';

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

    }


}
