import React from "react";
import Head from "next/head";
import { Header } from "src/components/Header";
import { Users as UsersComponent } from "src/components/Users";
import { SWRConfig } from "swr";
import { API_URL } from "src/utils/const";

export const getServerSideProps = async () => {
  const USERS＿API_URL = `${API_URL}/users`;
  const users = await fetch(USERS＿API_URL);
  const usersData = await users.json();

  return {
    props: {
      fallback: {
        [USERS＿API_URL]: usersData,
      },
    },
  };
};

const Users = (props) => {
  const { fallback } = props;
  return (
    <div>
      <Head>
        <title>Users Page</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <Header />
        <UsersComponent />
      </SWRConfig>
    </div>
  );
};

export default Users;
