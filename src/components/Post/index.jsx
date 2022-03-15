import React from "react";
import Head from "next/head";
import { usePost } from "src/hooks/usePost";
import { CommentsByPostsId } from "src/components/Comments/CommentsByPostId";
import { UserByUserId } from "src/components/User/UserByUserId";
import { useRouter } from "next/router";

export const Post = () => {
  const router = useRouter();
  const { data, error, isLoading } = usePost(router.query.id);
  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data.title}</title>
      </Head>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <UserByUserId id={data.userId}/>
      <CommentsByPostsId id={data.id}/>
    </div>
  );
};
