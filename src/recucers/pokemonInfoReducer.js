const pokemonInfoReducer = (state = [], action)=>{
    switch(action.type){
        case 'ADD_INFO':
            return {
                name: action.name,
                exp: action.exp,
                height: action.height,
                weight: action.weight,
                img: action.img
            }
        default: 
            return {}
    }
}
export default pokemonInfoReducer