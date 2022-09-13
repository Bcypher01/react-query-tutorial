import React from "react";
import { useQuery } from "react-query";
import * as api from "../usersApi";

export default function UserDetails({ userId }) {
  const { data: user, isLoading } = useQuery(
    ["user", userId],
    () => api.getUser(userId),
    {
      enabled: Boolean(userId),
    }
  );
  if (!userId) {
    return <h3 className="text-white">Select a user</h3>;
  }

  if (isLoading) {
    return <h3 className="text-white">Loading user details</h3>;
  }
  return (
    <div style={{ padding: 40, width: "70%" }}>
      <h3 className="text-white p-10">{user.name}</h3>
      <p className="text-white p-10">{user.details}</p>
    </div>
  );
}
