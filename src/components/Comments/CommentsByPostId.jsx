import React from "react";
import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/useFetchArray";

export const CommentsByPostsId = (props) => {
  const { data, error, isLoading, isEnpty } = useCommentsByPostId(props.id);

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
    <ul className=" space-y-2">
      {data.map((comment) => {
        return (
          <li key={comment.id} className="border-b pb-2">
            <Link href={`/comments/${comment.id}`}>
              <a className="block hover:text-blue-500">
                {comment.body}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
