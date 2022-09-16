import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import * as api from "../usersApi";

const UserForm = ({ user, setIsEditing }) => {
  const [fields, setFields] = useState({ ...user });

  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(api.updateUser, {
    onSuccess: () => {
      //trigger old data to be updated
      queryClient.invalidateQueries(["user", user.id]);

      setIsEditing(false);
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    mutate(fields);
  };

  return (
    <div style={{ paddingTop: 20 }}>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            name="name"
            type="text"
            value={fields.name}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: 20 }}
          />
        </label>
        <label>
          Details:{" "}
          <textarea
            name="details"
            value={fields.details}
            onChange={handleChange}
            style={{ width: "100%", height: 100 }}
          />
        </label>
        <button type="submit">{isLoading ? "Saving..." : "Save"}</button>
      </form>
    </div>
  );
};

export default UserForm;
