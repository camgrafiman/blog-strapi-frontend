import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Articles from "../components/articles";  
import Query from "../components/query";  
import ARTICLES_QUERY from "../utils/queries/article/articles";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog con Strapi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>Strapi blog</h1>
            <Query query={ARTICLES_QUERY}>
              {
                ({ data: { articles } }) => {
                return <Articles articles={articles} />
                }
              }
            </Query>
          </div>
        </div>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
