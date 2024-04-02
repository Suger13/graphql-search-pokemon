'use client'
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import getPokemonByName from "../_services/getPokemonByname";
import { useRouter } from "next/navigation";
import Loading from "../loading";


export default function PokemonDetails(props:any) {
    const [ pokemon , setPokemon ] = useState<{pokemon: any}>();
    const router = useRouter();
    useEffect(() => {
        if (props.props.pokemon) {
            setPokemon(props.props);
        }
    }, [props])
    

    return (
        <>
        { pokemon ? 
            <div className="rounded-xl flex justify-center mt-2">
            <div className="flex flex-col items-center">
                <div className="text-6xl">{pokemon.pokemon.name}</div>
                <div className="border-2 border-blue-300 rounded-lg mt-10">
                    <Image src={pokemon.pokemon.image} alt={pokemon.pokemon.name} width={400} height={300} className="rounded-lg"/>
                </div>
            </div>
            <div className="ml-10 flex">
                <div className="w-full"> {/* Attack */}
                    <div className="w-40 text-6xl">
                    Attacks
                    </div>

                    <div className="border-2 mt-1 rounded-lg flex p-2">
                        <div> {/* Fast */}
                            <div className="text-4xl text-blue-400">
                            Fast
                            </div>
                            <div className="mt-2">
                            {
                                pokemon.pokemon.attacks.fast.map((f:any, index:number) => {
                                return <div key={index}> 
                                    <div className="text-3xl text-orange-500">
                                        {f.name}
                                    </div>

                                    <div className="ml-10">
                                    <div className="flex">
                                        <div className="w-20">
                                        Type
                                        </div>
                                        <div>
                                        {f.type}
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="w-20">
                                        Damage
                                        </div>
                                        <div>
                                        {f.damage}
                                        </div>
                                    </div>
                                    </div>

                                </div>
                                })
                            }
                            </div>
                        </div> {/* Fast */}

                        <div className="ml-28"> {/* Special */}
                            <div className="text-4xl text-purple-500">
                            Special
                            </div>
                            <div>
                            {
                                pokemon.pokemon.attacks.special.map((f:any, index:number) => {
                                return <div key={index}> 
                                    <div className="text-3xl text-slate-500">
                                    {f.name}
                                    </div>

                                    <div className="ml-10">
                                        <div className="flex">
                                            <div className="w-20">
                                            Type
                                            </div>
                                            <div>
                                            {f.type}
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="w-20">
                                            Damage
                                            </div>
                                            <div>
                                            {f.damage}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                })
                            }
                            </div>
                        </div> {/* Special */}

                    </div> 
                </div> {/* Attack  */}
                { pokemon.pokemon.evolutions ? (
                    <div className="w-full ml-10">
                        <div className="w-40 text-6xl">
                        Evolution
                        </div>
                        <div className="border-2 w-96 mt-1 rounded-lg p-2">
                            {pokemon.pokemon.evolutions ? pokemon.pokemon.evolutions.map((evo:any, index: number) => {
                            return (
                                <div key={index} className="mt-2 text-lg">
                                    <button className="p-2 rounded-lg bg-blue-300 text-slate-700" onClick={ async() => {
                                        // let response = await getPokemonByName(evo.name);
                                        // setPokemon(response)
                                        router.push('/?search=' + evo.name);
                                    }}>{evo.name}</button>
                                </div>
                            )
                            }): ""}
                        </div>
                    </div>
                ) : "" }
            </div>
            </div>
                : ''}
        </>
    )

}