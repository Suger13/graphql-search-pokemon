'use client'
import { useState, useEffect } from "react";
import getPokemonByName from "@/app/_services/getPokemonByname";

export default function About({ params }: any) {
    const [ pokemon, setPokemon ] = useState();
    
    useEffect(() => {
        getPokemonByName(params.name)
    }, [])
    
    
    return (
        <div>
            About
        </div>
    )
}