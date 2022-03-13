import React from "react";
import { useEffect, useCallback, useReducer } from "react";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "end":
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case "error":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default: {
      throw new Error("no such action type!");
    }
  }
};

export const Posts = () => {
  const [state, diapatch] = useReducer(reducer, initialState);

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("エラーが発生したため、データの取得に失敗しました。");
      }
      const json = await res.json();
      diapatch({ type: "end", data: json });
    } catch (error) {
      diapatch({ type: "error", error });
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

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

// ifが通ると、それ以降は全て表示されなくなる。
// なので、コンポーネントを作って親と分ける必要がある。

/*
 ...prevStateは、前回のオブジェクトを展開している
 オブジェクトにおいては、後に書いた方が勝つ
 スプレッド演算子を使って書き換えたいところを上書き
 data: [],
 loading: true,
 error: null,
 */
