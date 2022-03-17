import React from "react";
import { Header } from "src/components/Header";
import { Comment } from "src/components/Comment";
import { SWRConfig } from "swr";

export const getStaticPaths = async () => {
  const comments = await fetch("https://jsonplaceholder.typicode.com/comments");
  const commentsData = await comments.json();
  const paths = commentsData.map((comment) => ({
    params: { id: comment.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT＿API_URL = `https://jsonplaceholder.typicode.com/comments/${id}`;
  const comments = await fetch(COMMENT＿API_URL);
  const commentsData = await comments.json();

  return {
    props: {
      fallback: {
        [COMMENT＿API_URL]: commentsData,
      },
    },
  };
};

const CommentsId = (props) => {
  const { fallback } = props;
  return (
    <div>
      <Header />
      <SWRConfig value={{ fallback }}>
        <Comment />
      </SWRConfig>
    </div>
  );
};

export default CommentsId;
