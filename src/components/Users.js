import React from "react";
import { useEffect, useState } from "react";
import * as api from "../usersApi";
import { ShowList } from "./ShowList";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let mounted = true;
    api.getUsers().then((data) => {
      if (mounted) {
        setUsers(data);
        console.log(data);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="m-12">
      <ShowList users={users} />
    </div>
  );
};

export default Users;
