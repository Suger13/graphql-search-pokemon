
import { useQuery, gql } from "@apollo/client";
import createApolloClient from "@/apollo-client";
import getPokemon from "./getPokemon";

export default async function Home() {

  getPokemon('Bulbasaur');
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql `
      query {
        pokemons (first: 10) {
          id
          name
        }
      }
    `
  })

  return (
    <div>
      Home
    </div>
  );
}
