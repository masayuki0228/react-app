import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Main page="index">
        <Link href="/about">
          <a className={styles.click}>押してね</a>
        </Link>
      </Main>
      <Footer />
    </div>
  );
}
