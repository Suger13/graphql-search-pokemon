import createApolloClient from "@/apollo-client"
import { gql } from '@apollo/client'
export default async function getPokemon (name: string) {
    
    const client = createApolloClient();
    const { data } = await client.query({
        query: gql `
            query: {
                pokemon(name: ${name})
            }
        `
    })
    console.log(data);
    return (
        <div>
            Pokemon!
        </div>
    )
}