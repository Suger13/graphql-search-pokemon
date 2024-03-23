'use client'
import { useState } from "react";
import PokemonDetails from "./PokemonDetails";
import getPokemonByName from "./_service/getPokemonByName";

export default function Home() {
  const [ searchName, setSearchName ] = useState('');
  const [ pokemon, setPokemon ] = useState({
    pokemon: 'empty'
  });
  
  const getPokemon = async () => {
    if (searchName) {
      const foundPokemon = await getPokemonByName(searchName);
      if (foundPokemon) setPokemon(foundPokemon);
      }
  }

  const handleTestButtonClick = () => {
    setSearchName('Bulbasaur');
  }
  return (
    <div>
      <div className="flex flex-col items-center mt-20 w-full gap-10">
        <div className="text-3xl font-bold"> Search Pokemon </div>
        <form action={getPokemon} className="w-full flex flex-col items-center gap-10">
          <input className="text-slate-700 w-1/2 rounded-xl p-3" name="search-pokemon" value={searchName} onChange={(e) => {setSearchName(e.target.value)}}/>
          <button type="submit" className="bg-blue-700 hover:bg-blue-500 active:bg-blue-900 rounded-lg p-3">Search!</button>
        </form>
          <button className="bg-slate-700 hover:bg-slate-500 active:bg-slate-900 rounded-lg p-3" onClick={() => {
            handleTestButtonClick()
          }}>Test</button>
        <div> 
          {
            pokemon.pokemon === 'empty' ? "" : pokemon.pokemon && pokemon.pokemon !== 'empty' ? 
              <PokemonDetails props={pokemon}/>
             : 'Pokemon Not Found'
          }
        </div>
      </div>
    </div>
  );
}
