import Link from "next/link";
import React from "react";
import { useUsers } from "src/hooks/useFetchArray";

export const Users = () => {
  const { data, error, isLoading, isEnpty } = useUsers();
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
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{`${user.name} (${user.email})`}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
