import React from "react";
import Link from "next/link";
import { useCommentsByPostsId } from "src/hooks/useFetchArray";

export const CommentsByPostsId = (props) => {
  const { data, error, isLoading, isEnpty } = useCommentsByPostsId(props.id);

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
      {data.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>
              <a>{comment.body}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
