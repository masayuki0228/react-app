import React from "react";
import { usePosts } from "src/hooks/usePosts";

export const Posts = () => {
  const { data, error, isLoading, isEnpty } = usePosts();
  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEnpty) {
    return <div>データは空です</div>;
  }

  return (
    <ol>
      {data.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ol>
  );
};