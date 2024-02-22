
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Your Name - Portfolio</title>
        <meta name="description" content="Your portfolio description goes here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <Link href="https://www.yourwebsite.com">
          Ankit Sah
          </Link>{' '}
          Portfolio
        </h1>

        <p className={styles.description}>
          Explore my work and get to know more about me.
        </p>

        <div className={styles.grid}>
          {/* Add your projects or portfolio items here */}
          <div className={styles.card}>
            <h3>Project 1</h3>
            <p>Project description goes here.</p>
          </div>
          <div className={styles.card}>
            <h3>Project 2</h3>
            <p>Project description goes here.</p>
          </div>
          {/* Add more projects as needed */}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Ankit Kumar Sah</p>
      </footer>
    </div>
  );

}
