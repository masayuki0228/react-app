import React from "react";
import { useState, useCallback, useEffect } from "react";

export const Posts = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null,
  });

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("エラーが発生したため、データの取得に失敗しました。");
      }
      const json = await res.json();
      setState((prevState) => {
        return {
          ...prevState,
          data: json,
          loading: false,
        };
      });
    } catch (error) {
      setState((prevState) => {
        return {
          ...prevState,
          loading: false,
          error,
        };
      });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  console.log("foo");

  // ifが通ると、それ以降は全て表示されなくなる。
  // なので、コンポーネントを作って親と分ける必要がある。

  if (state.loading) {
    return <div>ローディング中</div>;
  }

  if (state.error) {
    return <div>{state.error.message}</div>;
  }

  if (state.data.length === 0) {
    <div>データは空です</div>;
  }

  return (
    <ol>
      {state.data.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};

/*
 ...prevStateは、前回のオブジェクトを展開している
 オブジェクトにおいては、後に書いた方が勝つ
 スプレッド演算子を使って書き換えたいところを上書き
 data: [],
 loading: true,
 error: null,
 */
