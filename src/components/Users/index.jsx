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
    <ul className="grid grid-cols-2 gap-6">
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a className="block  p-4 shadow rounded hover:bg-gray-100 ">
                <h1 className="text-xl font-bold truncate">{user.name}</h1>
                <p className="text-lg  truncate">{user.email}</p>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
