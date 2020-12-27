export default {
    TextNull: (texts) =>{

        let bool = false

        texts.forEach(text => {

            if(text == '' || text == null){
                bool = true
            }
            
        });
        
        return bool

    },

   
}