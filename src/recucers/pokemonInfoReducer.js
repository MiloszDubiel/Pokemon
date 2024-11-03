const pokemonInfoReducer = (state = [], action)=>{
    switch(action.type){
        case 'ADD_INFO':
            return {
                name: action.name,
                exp: action.exp,
            }
        default: 
            return {}
    }
}
export default pokemonInfoReducer