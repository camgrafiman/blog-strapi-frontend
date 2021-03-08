import Link from "next/link";

const Card = ({ article }) => {

    const api_url = "http://localhost:1337";
    console.log(article);
    return (
        <Link href={{ pathname: "article", query: { id: article.id } }}>
            <a className="uk-link-reset">
                <div className="uk-card uk-card-muted">
                    <div className="uk-card-media-top">
                        <img src={api_url + article.image.url} alt={article.image.url} height="100"/>
                    </div>
                    <div className="uk-card-body">
                        <p id="category" className="uk-text-uppercase">
                            {article.category.name}
                        </p>
                        <p id="title" className="uk-text-large">
                            {article.title}
                        </p>
                    </div>
               </div> 
          </a>  

        </Link>
    )
}

export default Card;