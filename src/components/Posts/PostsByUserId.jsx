import React from "react";
import Link from "next/link";
import { usePostsByUserId } from "src/hooks/useFetchArray";

export const PostsByUserId = (props) => {
  const { data, error, isLoading, isEnpty } = usePostsByUserId(props.id);

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
      {data.map((data) => {
        return (
          <li key={data.id}>
            <Link href={`/posts/${data.id}`}>
              <a>{data.title}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
