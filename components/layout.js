import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

export const siteTitle = 'Who\'s a good boi?'

export default function Layout({ children, home }) {
  return (
    <div className={"container-fluid"}>
      <Head>
        
      </Head>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Who's a good boi?</span>
        </div>
      </nav>
      <header className={"pt-5"}>
      </header>
      <main className={"container pt-5"}>{children}</main>
      <footer className={"container-fluid"}>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </footer>
    </div>
  )
}