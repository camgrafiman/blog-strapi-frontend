import Card from "./card";


// Este componente recibe un prop ({ articles })!
// Viene de la página index.

const Articles = ({ articles }) => {
    const leftArticlesCount = Math.ceil(articles.length / 5);
    console.log("articulos en la izquierda: ", leftArticlesCount);
    const leftArticles = articles.slice(0, leftArticlesCount);
    const rightArticles = articles.slice(leftArticlesCount, articles.length);

    return (
        <div>
            <div className="uk-child-width-1-2" data-uk-grid>
                <div>
                    {leftArticles.map((article, i) => {
                        return <Card article={article} key={`article__${article.id}`} />;
                    })}
                </div>
                <div>
                    <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
                        {rightArticles.map((articulo, i) => {
                            return <Card article={articulo} key={`article__${articulo.id}`} />
                        })}
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Articles;