import React from "react";
import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { useState, useCallback, useEffect } from "react";

const Home = (props) => {
  const [posts, setPosts] = useState([]);
  const getPosts = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setPosts(json);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log(posts);

  return (
    <div className={styles.container}>
      <Head>
        <title>廣澤 React学習</title>
      </Head>
      <Header />
      {posts.length > 0 ? (
        <ol>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ol>
      ) : null}
    </div>
  );
};

export default Home;
