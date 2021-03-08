import { useRouter } from "next/router";
import Query from "../components/query";
import ReactMarkdown from "react-markdown";
import ARTICLE_QUERY from "../utils/queries/article/article";
import { format } from "date-fns";

const article = () => {
    const router = useRouter();

    return (
        // router.query.id recoge el dato de la url: ejemplo: http://localhost:3000/article?id=1
        <Query query={ARTICLE_QUERY} id={router.query.id}>
            
            { ({ data: { article } }) => {
                console.log(article);
                return (
                    <div>
                        <div id="banner" className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin" data-src={process.env.NEXT_PUBLIC_API_URL + article.image.url} data-srcset={process.env.NEXT_PUBLIC_API_URL + article.image.url} data-uk-img>
                            <h1>{ article.title }</h1>

                        </div>

                        <div className="uk-section">
                            <div className="uk-container uk-container-small">
                                <ReactMarkdown source={article.content} transformImageUri={uri => uri.startsWith("http") ? uri: `${process.env.NEXT_PUBLIC_API_URL}${uri}`} />
                                <p>
                                    { format(new Date(article.published_at), 'dd/MM/yyyy') }
                                </p>
                            </div>
                        </div>


                    </div>
                )
            }}
        </Query>
    )
}

export default article;