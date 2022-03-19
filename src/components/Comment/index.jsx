import React from "react";
import Head from "next/head";
import { useComment } from "src/hooks/useComment";
import { PostTitleByPostId } from "src/components/Post/PostTitleByPostId";

export const Comment = () => {
  const { data, error, isLoading } = useComment();
  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data.name}</title>
      </Head>
      <div className="text-lg">
        Created by {data.name} ({data.email})
      </div>
      <h1 className="text-3xl font-bold">{data.body}</h1>

      <h2 className="font-bold text-xl mt-10">元の記事</h2>
      <div className="mt-2">
        <PostTitleByPostId id={data.postId} />
      </div>
    </div>
  );
};
