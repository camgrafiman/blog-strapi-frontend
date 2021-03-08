import { useQuery } from "@apollo/react-hooks";

const Query = ({ children, query, id }) => {
    // Usando el useQuery hook para llamar al servidor de Strapi en la url: http://localhost:1337/graphql. 
    // Enviamos el id y si existe (será necesario cuando quiera hacer fetch a un id en concreto).
    const { data, loading, error } = useQuery(query, { variables: { id: parseInt(id) } });

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {JSON.stringify(error)}</p>;
    // si la request se cumple, se retornará un componente hijo con la data recogida como props.
    return children({ data });
};

export default Query;