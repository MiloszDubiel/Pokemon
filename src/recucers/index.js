import { combineReducers } from "redux"; 
import pokemonInfoReducer from "./pokemonInfoReducer";

export default combineReducers({
    pokemonInfo: pokemonInfoReducer
})