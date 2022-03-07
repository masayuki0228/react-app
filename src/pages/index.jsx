import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";
import Link from "next/link";
import { useCallback } from "react/cjs/react.development";
// import { useCallback } from "react/cjs/react.production.min"; ⇦こっちは駄目

export default function Home() {
  const handleClick = useCallback((e) => {
    console.log(e.target);
    e.preventDefault();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Link href="/about" onClick={handleClick}>
        ボタン
      </Link>
      <Main page="index">
        {/* passHref is missing. よく分かってないがこのページの言う通りにしたら治った → https://nextjs.org/docs/messages/link-passhref */}
        {/* 追記: aタグの機能を持ったカスタムコンポーネントを使う場合に、passHrefを記述する。 */}
        <Link href="/about" passHref>
          <button className={styles.click}>押してね</button>
        </Link>
      </Main>
      <Footer />
    </div>
  );
}
