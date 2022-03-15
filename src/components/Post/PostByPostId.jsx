import React from "react";
import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";
import Link from "next/link";

export const PostByPostId = (props) => {
  const { data, error } = useSWR(
    props.id ? `https://jsonplaceholder.typicode.com/posts/${props.id}` : null,
    fetcher
  );

  if (!data && !error) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Link href={`/posts/${data.id}`}>
      <a>{data.title}</a>
    </Link>
  );
};
