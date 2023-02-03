import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Puran Ban</title>
        <meta name="puran" content="puran ban" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <div className={styles.name}>
            Hello!
            Puran Ban
          </div>
          <div className={styles.profession}>
            Frontend Developer
          </div>
          <div>
            <Link href="https://github.com/puranban" >
              Connect on Github
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
