import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import Link from "next/link";
import { useCallback, useEffect } from "react";

const handleClick = (e) => {
  console.log(e.target);
  e.preventDefault();
};

export default function Home() {
  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Link href="/about">
        <a onClick={handleClick}>ボタン</a>
      </Link>
      {/* <Link>でルーティングするアンカー要素をラップするとよい! */}
      <Main page="index" />
      <Footer />
    </div>
  );
}
