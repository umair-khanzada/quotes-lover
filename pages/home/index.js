import Head from 'next/head';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quotes App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>It's a Home Page.</h1>
      </main>
    </div >
  );
}