import createApolloClient from '@/apollo-client';
import { gql } from '@apollo/client';

export default async function getPokemonByName (param:string) {
    const client = createApolloClient();
    const { data, loading, error } = await client.query({
        query: gql `
            query {
                pokemon(name: "${param}") {
                    id
                    name
                    attacks {
                        fast {
                            name
                            type
                            damage
                        }
                        special{
                            name
                            damage
                            type
                        }
                    }
                    image
                    evolutions {
                        id
                        name
                        attacks {
                          fast {
                            name
                            type
                            damage
                          }
                          special {
                            name
                            type
                            damage
                          }
                        }
                      }
                }
            }
        `
    })
    
    return data ? data : null
}