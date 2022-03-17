import React from "react";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Comments as CommentsComponent } from "src/components/Comments";
import { SWRConfig } from "swr";

export const getStaticProps = async () => {
  const COMMENTS＿API_URL = `https://jsonplaceholder.typicode.com/comments`;
  console.log("sg");
  const comments = await fetch(COMMENTS＿API_URL);
  const commentsData = await comments.json();

  return {
    props: {
      fallback: {
        [COMMENTS＿API_URL]: commentsData,
      },
    },
  };
};

const Comments = (props) => {
  const { fallback } = props;
  return (
    <div>
      <Head>
        <title>Comments Page</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <Header />
        <CommentsComponent />
      </SWRConfig>
    </div>
  );
};

export default Comments;
