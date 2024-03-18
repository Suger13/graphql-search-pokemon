import createApolloClient from "@/apollo-client";
import { gql } from '@apollo/client';
import type { NextApiRequest, NextApiResponse } from "next";
export async function GET(req: NextApiRequest, res: NextApiResponse) {

    const client = createApolloClient();
    const { data } = await client.query({
        query: gql `
            query {
                pokemons(first: 10) {
                    id
                    name
                }
            }
        `
    })

    
    res.status(200).json({
        message: "Hello"
    })
}