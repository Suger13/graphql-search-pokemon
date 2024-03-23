import createApolloClient from '@/apollo-client';
import { gql } from '@apollo/client';
export async function GET(req: Request, { params }: { params: {name: string}}) {
    const client = createApolloClient();
    console.log("api params: ", params);
    
    const { data } = await client.query({
        query: gql `
            query {
                pokemon(name: "${params.name}") {
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
    
    
    return Response.json(data ? data : null)
}