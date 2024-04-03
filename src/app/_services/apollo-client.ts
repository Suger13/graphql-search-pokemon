import { ApolloClient, InMemoryCache, HttpLink  } from "@apollo/client";
// import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

// export const { getClient } = registerApolloClient(() => {
//     return new ApolloClient({
//         cache: new InMemoryCache(),
//         link: new HttpLink({
//             uri: 'https://graphql-pokemon2.vercel.app/'
//         })
//     })
// })

export default function apolloClient () {
    return new ApolloClient({
        uri: 'https://graphql-pokemon2.vercel.app/',
        cache: new InMemoryCache()
    })
}