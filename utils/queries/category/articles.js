import gql from "graphql-tag";
const CATEGORIES_ARTICLES_QUERY = gql`
    query Category($id: ID!) {
        category(id: $id) {
            name
            articles {
                id
                title
                content
                image {
                    url
                }
                category {
                    id
                    name
                }
            }
        }
    }
`;

export default CATEGORIES_ARTICLES_QUERY;