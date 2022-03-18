import React from "react";
import { Header } from "src/components/Header";
import { Comment } from "src/components/Comment";
import { SWRConfig } from "swr";
import { API_URL } from "src/utils/const";

export const getStaticPaths = async () => {
  const comments = await fetch(
    `${API_URL}/comments?_limit=10`
  );
  const commentsData = await comments.json();
  const paths = commentsData.map((comment) => ({
    params: { id: comment.id.toString() },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT＿API_URL = `${API_URL}/comments/${id}`;
  const comment = await fetch(COMMENT＿API_URL);

  if (!comment.ok) {
    return {
      notFound: true,
      revalidate: 10,
    };
  }

  const commentData = await comment.json();

  return {
    props: {
      fallback: {
        [COMMENT＿API_URL]: commentData,
      },
    },
    revalidate: 10,
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
