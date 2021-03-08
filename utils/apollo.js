import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import withApollo from "next-with-apollo";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";

// Actualizar el endpoint de GraphQl a la instancia que se necesite en este caso lo pongo apuntando al endpoint de strapi donde está graphql:
const GRAPHQL_URL = process.env.GRAPHQL_URL || "http://localhost:1337/graphql";

const link = createHttpLink({
    fetch, // Se cambia entre unfetch y node-fetch para cliente y servidor.
    uri: GRAPHQL_URL
});

// Exportar un HOC (High Order Component desde next-with-apollo)
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(
    // Puedo obtener los headers y el contexto (context) desde los parametros del callback.
    // ejemplo: ({headers, ctx, initialState})
    ({ initialState }) => {
        return new ApolloClient({
            link: link,
            cache: new InMemoryCache().restore(initialState || {}) // Rehidrata la cache usando la data inicial pasada desde el servidor
        })}
    
)