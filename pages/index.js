import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Zdravíčko! Vítejte v mé ukázce Next.js a Reactu.</p>
        <p>
          Na místní a další práce a projekty se můžete ve větším detailu mrknout na mých stránkách vytvořených klasicky v HTML, CSS a JS a ve frameworku FLASK na mém hlavním portfoliu. Odkaz tam i na GitHub přímo na tento projekt najdete v zápatí stránky dole.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Výběrové projekty </h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`projects/${id}`}>{id}</Link>
              <br />
              <small className={utilStyles.lightText}>
              </small>
            </li>
          ))}

        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
