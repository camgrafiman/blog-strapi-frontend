import Head from "next/head";
import "../styles/globals.css";
import "../assets/css/style.css";
import Nav from '../components/nav';
import { ApolloProvider } from "@apollo/react-hooks";
import withApolloData from "../utils/apollo";


const MyApp = ({ Component, pageProps, apollo }) => {
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>Blog con Strapi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Staatliches" />
        {/* UIKIT. Librería estilos - interfaces https://getuikit.com/ */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
      </Head>
      <Nav></Nav>
      {/* Aquí Next inyecta los componentes  */}
    <Component {...pageProps} />
    </ApolloProvider>
  )
}

// Cubre todos los componentes en el arbol con el proveedor de data de apollo. utils/apollo
export default withApolloData(MyApp);
