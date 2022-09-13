import React from "react";
import { useQuery } from "react-query";
import * as api from "../usersApi";

export default function UserDetails({ userId }) {
  const { data: user, isLoading } = useQuery(["user", userId], () =>
    api.getUser(userId)
  );
  if (!userId) {
    return <h3>Select a user</h3>;
  }

  if (isLoading) {
    return <h3>Loading user details</h3>;
  }
  return (
    <div style={{ padding: 20, width: "70%" }}>
      <h3 className="text-white">{user.name}</h3>
      <p className="text-white">{user.details}</p>
    </div>
  );
}
