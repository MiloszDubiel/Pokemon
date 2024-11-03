import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCards/PokemonCards";

async function getPokemons() {
  let pokemons = []
  
  for(let i = 1; i <= 50; i++){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    const data = await response.json()
    pokemons.push(data)
  }
  return pokemons
}
const Main = props => {

    let [cardsOfPokemons, setCardsOPokemons] = useState()
    let [extractedData, setExtractedData] = useState(false)


    useEffect(()=>{
      let response = getPokemons()
      let extractData = []
      response.then(data => {
        extractData = data
        const cards = data.map(element=>{
          return <PokemonCard key={element.id} name={element.name} img={element.sprites.front_default} exp={element.base_experience}/>
        })
        setExtractedData(extractData)
        setCardsOPokemons(cards)
      })

    },[])

    const findPokemon = e =>{
      let extracted = [...extractedData]
      let searchedCards =  extracted.filter(element=> {
        let term = String(e.currentTarget.value).toLowerCase()
        let currentName = String(element.name).toLowerCase()
        return currentName.includes(term)
      })

      let newCards = searchedCards.map(element=>{
        return <PokemonCard key={element.id} name={element.name} img={element.sprites.front_default} exp={element.base_experience}/>
      })

      setCardsOPokemons(newCards)
    }
    return (
      <>
      {props.children}
      <div className="container py-5">
        <h1 className="text-center mb-4">Pokédex</h1>
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <input onChange={ e => findPokemon(e) }
              type="text"
              className="form-control"
              placeholder="Search for a Pokémon..."
            />
          </div>
        </div>
        <div className="row">
          {cardsOfPokemons}
        </div>
      </div>
      </>
    );
  };

export default Main;
