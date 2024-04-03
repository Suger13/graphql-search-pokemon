'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PokemonDetails from "./PokemonDetails";
import getPokemonByName from "../_services/getPokemonByname";
import { useSearchParams } from 'next/navigation';
import randomPokemon from "../_services/randomPokemon";

export default function SearchPokemon() {
    const [ searchName, setSearchName ] = useState('');
    const [ pokemon, setPokemon ] = useState<{pokemon:any}>({
      pokemon: 'empty'
    });
    const [ isLoad, setIsLoad ] = useState<Boolean>(false);
    const searchParams = useSearchParams()
    const search = searchParams.get('search')?.toString();
    const router = useRouter();

    useEffect(() => {
        if (search) {
          getPokemon(search)
        }
    }, [search])
    
    const handleSetUrlParam = () => {
        router.push('/?search=' + searchName)
      }

    const getPokemon = async (pokemonName:string) => {
      setIsLoad(true)
      if (pokemonName) {
        const foundPokemon = await getPokemonByName(pokemonName);
          if (foundPokemon) {
            setPokemon(foundPokemon);
            setIsLoad(false)
          }
        }
      }

    return (
      <>
          <div className="text-3xl font-bold">Search Pokemon</div>
          <form action={handleSetUrlParam} className="w-full flex flex-col items-center gap-10">
            <input className="text-slate-700 w-1/2 rounded-xl p-3" name="search-pokemon" value={searchName} onChange={(e) => {setSearchName(e.target.value)}}/>
            {isLoad ? "Loading..." : <button type="submit" className="bg-blue-700 hover:bg-blue-500 active:bg-blue-900 rounded-lg p-3">Search!</button> }
          </form>
          <button className="bg-slate-700 hover:bg-slate-500 active:bg-slate-900 rounded-lg p-3" onClick={() => {
              setSearchName(randomPokemon());
          }}>Random Name</button>
          {
              pokemon.pokemon === 'empty' ? "" : pokemon.pokemon && pokemon.pokemon !== 'empty' ? 
              <PokemonDetails props={pokemon}/>
              : 'Pokemon Not Found'
          }
      </>
    )
}