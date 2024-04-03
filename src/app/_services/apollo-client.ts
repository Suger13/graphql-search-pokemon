import { ApolloClient, InMemoryCache  } from "@apollo/client";

export default function apolloClient () {
    return new ApolloClient({
        uri: 'https://graphql-pokemon2.vercel.app/',
        cache: new InMemoryCache()
    })
}