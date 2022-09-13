import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import * as api from "../usersApi";
import UserDetails from "./UserDetails";
const Users = () => {
  const [userId, setUserId] = useState();
  const { data, isLoading, isError } = useQuery("users", api.getUsers);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>Something went wrong!!!</h3>;
  }
  return (
    <div className="flex">
      <div className="w-30 text-white">
        <ul>
          {data?.map((user) => (
            <li key={user.id}>
              {user.name}
              <button onClick={() => setUserId(user.id)}>View</button>
            </li>
          ))}
        </ul>
      </div>
      <UserDetails userId={userId} />
    </div>
  );
};

export default Users;
