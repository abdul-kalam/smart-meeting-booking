import { InMemoryCache, ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { typeDefs } from "./TypeDefs";
import link from "./Middlewares";
import initCache from "./Cache";

let client: ApolloClient<NormalizedCacheObject>;

export const getApolloClient =  (): ApolloClient<NormalizedCacheObject> => {
    if (client) return client;

    const cache: InMemoryCache = initCache();

    const apolloClient: ApolloClient<any> = new ApolloClient({
        link,
        cache,
        connectToDevTools: process.env.NODE_ENV === "development",
        typeDefs,
    });

    client = apolloClient;

    return apolloClient;
};
