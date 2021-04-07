import Head from 'next/head'
import Link from 'next/link'

import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'

import utilStyles from '../styles/utils.module.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa lorem, tincidunt id porttitor et, eleifend ac orci. In nec eros id nunc molestie hendrerit quis quis ante. Ut a rhoncus purus. Aliquam erat volutpat. Curabitur eget orci nec nibh tempor sodales. Praesent molestie erat augue, dapibus pellentesque nisl scelerisque auctor. Nulla bibendum lectus non ex porta, eget dictum lectus tristique. Sed dapibus sodales faucibus. Nulla consequat nulla ut lorem feugiat consequat. Mauris malesuada turpis ipsum, non pellentesque libero commodo in. Nam aliquam, justo eu porttitor mattis, metus ex sollicitudin augue, ac faucibus libero sem vitae mi. </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>          
          ))}
        </ul>
      </section>
    </Layout>
  )
}
