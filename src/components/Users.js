import React from "react";
import { useQuery } from "react-query";
import * as api from "../usersApi";
const Users = () => {
  const { data } = useQuery("users", api.getUsers);

  return (
    <div className="text-white">
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
