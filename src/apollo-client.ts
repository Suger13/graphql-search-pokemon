import { ApolloClient, InMemoryCache  } from "@apollo/client";

export default function createApolloClient() {
    const client = new ApolloClient({
        uri: 'https://graphql-pokemon2.vercel.app/',
        cache: new InMemoryCache()
    })

    return client;
}